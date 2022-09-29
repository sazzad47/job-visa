import connectDB from '../../../utils/connectDB'
import Contact from '../../../models/contactModel'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await postContact(req, res)
            break;
        case "GET":
            await getContact(req, res)
            break;
    }
}

const postContact = async (req, res) => {
    try{
        
        const { name, phone, email, message } = req.body
        

        const newUser = new Contact({ 
            name, phone, email, message
            
        })

        await newUser.save()
        res.json({msg: "Thank you"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}



const getContact = async (req, res) => {
    try {
        // const features = new APIfeatures(Contact.find(), req.query)
        // .paginating()
        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        console.log('perpage', filter)
        const applicants = await Contact.find(filter).skip(skip).limit(limit).sort(sort)
        const totalApplicants = await Contact.find()
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
