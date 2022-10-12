import connectDB from '../../../utils/connectDB'
import Payment from '../../../models/paymentModel'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'
import sendEmail from '../../../utils/mail'
import VisaApplicant from '../../../models/visaApplicant'
import JobApplicant from '../../../models/jobApplicant'

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await apply(req, res)
            break;
        case "GET":
            await getApplicants(req, res)
            break;
    }
}

const apply = async (req, res) => {
    try{
        const result = await auth(req, res)
        
        const { visaApplyID, jobApplyID, bankReceipt, method, amount } = req.body
        
         console.log('bankpapyment', result)

        const newPayment = new Payment({ 
            user: result.id,
            visaApplyID,
            jobApplyID,
            bankReceipt,
            method,
            amount
            
            
        })

      

        await newPayment.save()
        await sendEmail({
            to: result.email,
            from: process.env.SENDER_EMAIL,
            subject: '[job-visa] Received payment.',
            html: `
            <div>
              <p>Hello, ${result.name}</p>
              <p>We received your payment.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error
               sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
               vitae dicta sunt explicabo.</p>
            </div>
            `,
          });

          await VisaApplicant.findOneAndUpdate({index: parseInt(visaApplyID)}, {paid: true})
          await JobApplicant.findOneAndUpdate({index: parseInt(jobApplyID)}, {paid: true})
        res.json({msg: "Uploaded successfully!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}