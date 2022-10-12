import connectDB from '../../utils/connectDB'
import LoanApplicants from '../../models/loanApplicant'
import VisaApplicants from '../../models/visaApplicant'
import JobApplicants from '../../models/jobApplicant'
import Users from '../../models/userModel'
import auth from '../../middleware/auth'
connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await apply(req, res)
            break;
        case "GET":
            await getTotalCost(req, res)
            break;
    }
}


const getTotalCost = async (req, res) => {
    const {visaApplyID, jobApplyID} = req.query
    console.log('jobApplyID', req.query)
    try {
        const result = await auth(req, res)
        
        const visa = await VisaApplicants.findOne({index: visaApplyID})
        const job = await JobApplicants.findOne({index: jobApplyID})
        // let jobCost = parseInt(job.cost)
        // let visaCost = parseInt(visa.cost)
        
        // let totalCost
        // if (!visa || !job) return res.json({ totalCost: parseInt(job.cost) || parseInt(visa.cost), success: true })
        if (!visa) return res.json({totalCost: parseInt(job.cost), success: true })
        if (!job) return res.json({totalCost: parseInt(visa.cost), success: true })
         
        res.json({
        
            totalCost: parseInt(visa.cost) + parseInt(job.cost),
            success: true
        })
        
        
        
        
        
        
        
        
        
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

