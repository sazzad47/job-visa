import connectDB from '../../../../utils/connectDB'
import Applications from '../../../../models/loanApplicant'

import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getApplications(req, res)
            break;
    }
}

const getApplications = async (req, res) => {
    try {
        const result = await auth(req, res)

        
        const applications = await Applications.find({userId: result.userId}).populate("user", "-password")
    
       
        res.json({applications})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}