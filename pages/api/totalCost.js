import connectDB from '../../utils/connectDB'
import LoanApplicants from '../../models/loanApplicant'
import VisaApplicants from '../../models/visaApplicant'
import JobApplicants from '../../models/jobApplicant'
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
    
    try {
        let visa = await VisaApplicants.findOne({index: visaApplyID})
        let job = await JobApplicants.findOne({index: jobApplyID})
        let visaCost = parseInt(visa.cost)
        let jobCost = parseInt(job.cost)
        let totalCost = visaCost + jobCost
        
        console.log('jobApplyID', totalCost)
        
        
        
        res.json({
            
            totalCost,
            success: true
        })
        
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

