import connectDB from '../../../utils/connectDB'
import LoanApplicants from '../../../models/loanApplicant'
import auth from '../../../middleware/auth'
import VisaApplicant from '../../../models/visaApplicant'
import JobApplicant from '../../../models/jobApplicant'
import sendEmail from '../../../utils/mail'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getApplicant(req, res)
            break;
        case "PATCH":
            await updateStatus(req, res)
            break;
        case "DELETE":
            await deleteItem(req, res)
            break;
    }
}

const getApplicant = async (req, res) => {
    try {
        const { id } = req.query;
        
        const data = await LoanApplicants.findById(id)
        if(!data) return res.status(400).json({err: 'This applicant does not exist.'})
        
        res.json({ data })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateStatus = async (req, res) => {
    try {
    //    const result = await auth(req, res)
    //    if(result.role !== 'admin' || !result.root) 
    //    return res.status(400).json({err: "Authentication is not valid"})

       const {id} = req.query
       const {status} = req.body
     
       const updatedApplication = await LoanApplicants.findOneAndUpdate({_id: id}, {status}).populate('user', '-password')
       console.log('updatedApplication', updatedApplication)
       let loanAmount = parseInt(updatedApplication.amountOfMoney)
       const visaApplyID = updatedApplication.visaApplyID
       const jobApplyID = updatedApplication.jobApplyID
       
       if (status === "declined") return await sendEmail({
        to: updatedApplication.user.email,
        from: process.env.SENDER_EMAIL,
        subject: '[job-visa] Loan application declined.',
        html: `
        <div>
          <p>Hello, ${updatedApplication.user.name}</p>
          <p>Your loan application is declined.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
       if (visaApplyID =="") return await JobApplicant.findOneAndUpdate({index: parseInt(visaApplyID)}, { $inc: { cost: -loanAmount } })
       if (jobApplyID =="") return await VisaApplicant.findOneAndUpdate({index: parseInt(visaApplyID)}, { $inc: { cost: -loanAmount } })
         
       await VisaApplicant.findOneAndUpdate({index: parseInt(visaApplyID)}, { $inc: { cost: -loanAmount/2 } })
       await JobApplicant.findOneAndUpdate({index: parseInt(jobApplyID)}, { $inc: { cost: -loanAmount/2 } })
        
       await sendEmail({
        to: updatedApplication.user.email,
        from: process.env.SENDER_EMAIL,
        subject: '[job-visa] Loan application approved.',
        html: `
        <div>
          <p>Hello, ${updatedApplication.user.name}</p>
          <p>Your loan application is approved.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
       res.json({msg: 'Approved!'})
       console.log('status',req.query)

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}



const deleteItem = async(req, res) => {
    try {
        // const result = await auth(req, res)
        
        // if(result.role !== 'admin') 
        // return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await LoanApplicants.findOneAndUpdate({_id: id}, {
            done: true
        })
        res.json({msg: 'Element deleted!'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}