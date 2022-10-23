import connectDB from "../../utils/connectDB";
import VisaApplicants from "../../models/visaApplicant";
import auth from "../../middleware/auth";
connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getTotalCost(req, res);
      break;
  }
};

const getTotalCost = async (req, res) => {
  const { visaApplyID } = req.query;
  console.log("jobApplyID", req.query);
  try {
    const result = await auth(req, res);

    const visa = await VisaApplicants.findOne({ index: visaApplyID });
    if (!visa) return res.status(400).json({ err: "Application not found!" });

    if (visa.cost === 0)
      return res.status(400).json({ err: "Cost not set yet." });

    res.json({
      totalCost: visa.cost,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
