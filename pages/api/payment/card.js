const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import VisaApplicant from '../../../models/visaApplicant'
import JobApplicant from '../../../models/jobApplicant'
import Payment from '../../../models/paymentModel'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'
import sendEmail from '../../../utils/mail';
async function CreateStripeSession(req, res) {
  const result = await auth(req, res)
  const { item } = req.body;
  console.log('checkout', item)
  const redirectURL =
    `${process.env.BASE_URL}/payment`

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        // images: [item.image],
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
        name: item.name,
    },
  });

  const newPayment = new Payment({ 
    user: result.id,
    visaApplyID: item.visaApplyID,
    jobApplyID: item.jobApplyID,
    method: "card",
    amount: item.price
    
    
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
  await VisaApplicant.findOneAndUpdate({index: parseInt(item.visaApplyID)}, {paid: true})
  await JobApplicant.findOneAndUpdate({index: parseInt(item.jobApplyID)}, {paid: true})
  res.json({ id: session.id });
}

export default CreateStripeSession;