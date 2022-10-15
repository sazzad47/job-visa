import connectDB from '../../../utils/connectDB'
import Payment from '../../../models/paymentModel'
import auth from '../../../middleware/auth'
import sendEmail from '../../../utils/mail'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await pay(req, res)
            break;
        case "GET":
            await getApplicants(req, res)
            break;
    }
}

const pay = async (req, res) => {
    try{
        const result = await auth(req, res)
        
        const { visaApplyID, jobApplyID, bankReceipt, method, amount } = req.body
        
        

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

          
        res.json({msg: "Uploaded successfully!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}