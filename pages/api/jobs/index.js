import connectDB from '../../../utils/connectDB'
import Jobs from '../../../models/jobModel'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createJob(req, res)
            break;
        case "GET":
            await getJobs(req, res)
            break;
    }
}

const createJob = async (req, res) => {
    try{
        
        const { title, country, salary, file } = req.body
       
        const newJob = new Jobs({ 
            title, country, salary: parseInt(salary), file, dateOfPost: new Date().toISOString()
            
        })

        await newJob.save()
        res.json({msg: "Job saved successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}



const getJobs = async (req, res) => {
    try {

        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        const data = await Jobs.find({
            $and: [filter, {done: false}]
        }).skip(skip).limit(limit).sort(sort)
      
        const totalItem = await Jobs.find({done: false})
        
        
          
        res
        .setHeader("x-total-count", parseInt(totalItem.length))
        .json({
            status: 'success',
            result: data.length,
            data
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

