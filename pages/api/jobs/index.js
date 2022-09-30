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
        
        const { title, shortDescription, photo, file } = req.body
        
        const newJob = new Jobs({ 
            title, shortDescription, photo, file
            
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
        const applicants = await Jobs.find(filter).skip(skip).limit(limit).sort(sort)
        const totalApplicants = await Jobs.find()
        // .skip(page * perPage)
        // .limit(perPage)
        
        res
        .setHeader("x-total-count", parseInt(totalApplicants.length))
        .json({
            status: 'success',
            result: applicants.length,
            applicants
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

