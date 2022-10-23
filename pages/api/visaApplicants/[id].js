import connectDB from "../../../utils/connectDB";
import VisaApplicants from "../../../models/visaApplicant";
import auth from "../../../middleware/auth";
import sendEmail from "../../../utils/mail";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getApplicant(req, res);
      break;
    case "PATCH":
      await updateStatus(req, res);
      break;
    case "PUT":
      await updateCost(req, res);
      break;
    case "DELETE":
      await deleteItem(req, res);
      break;
  }
};

const getApplicant = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await VisaApplicants.findById(id);
    if (!data)
      return res.status(400).json({ err: "This applicant does not exist." });

    res.json({ data });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin" || !result.root)
      return res.status(400).json({ err: "Authentication is not valid" });
    const { id } = req.query;
    const { status } = req.body;
    const { visa } = req.query;
    if (visa) {
      console.log("visa", visa);
      await VisaApplicants.findOneAndUpdate(
        { _id: id },
        { visa },
        { uploadedVisa: true }
      ).populate("user", "-password");
      res.json({ msg: "Success!" });
    } else {
      const application = await VisaApplicants.findOneAndUpdate(
        { _id: id },
        { status }
      ).populate("user", "-password");
      if (status === "approved")
        return await sendEmail({
          to: application.user.email,
          from: process.env.SENDER_EMAIL,
          subject: "[job-visa] Visa application approved.",
          html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your visa application has been approved!.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
        });
      await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: "[job-visa] Visa application declined.",
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your visa application has been declined.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
      res.json({ msg: "Success!" });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const updateCost = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin" || !result.root)
      return res.status(400).json({ err: "Authentication is not valid" });
    const { id } = req.query;
    const { cost } = req.query;
    const application = await VisaApplicants.findOne({ _id: id }).populate(
      "user",
      "-password"
    );
    if (cost) {
      await VisaApplicants.findOneAndUpdate(
        { _id: id },
        { cost: parseInt(cost) }
      );
      await VisaApplicants.findOneAndUpdate({ _id: id }, { paid: false });
      await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: "[job-visa] Job cost.",
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your job cost is ${cost}.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
    } else {
      await VisaApplicants.findOneAndUpdate({ _id: id }, { paid: true });
      await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: "[job-visa] Job cost.",
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>We received your payment.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
    }

    res.json({ msg: "Success!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.query;
    await VisaApplicants.findOneAndUpdate(
      { _id: id },
      {
        done: true,
      }
    );
    res.json({ msg: "Element deleted!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
