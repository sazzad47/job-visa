import { buffer } from "micro";
const Stripe = require("stripe");
import VisaApplicant from "../../models/visaApplicant";
import JobApplicant from "../../models/jobApplicant";
import Payment from "../../models/paymentModel";
import Users from "../../models/userModel";
import auth from "../../middleware/auth";
import sendEmail from "../../utils/mail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    let stripeEvent;
    try {
      stripeEvent = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    if ("checkout.session.completed" === stripeEvent.type) {
      const session = stripeEvent.data.object;
      const data = session.metadata;

      console.log("payment success", session);
      const newPayment = new Payment({
        user: JSON.parse(data.user),
        visaApplyID: data.visaApplyID,
        amount: data.price,
        method: data.method,
      });

      await newPayment.save();
      await sendEmail({
        to: session.customer_details.email,
        from: process.env.SENDER_EMAIL,
        subject: "[job-visa] Received payment.",
        html: `
                <div>
                  <p>Hello, ${session.customer_details.name}</p>
                  <p>We received your payment.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error
                   sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                   vitae dicta sunt explicabo.</p>
                </div>
                `,
      });
      await VisaApplicant.findOneAndUpdate(
        { index: parseInt(data.visaApplyID) },
        { paid: true }
      );
    }
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
