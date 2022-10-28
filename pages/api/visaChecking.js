import connectDB from "../../utils/connectDB";
import VisaApplicant from "../../models/visaApplicant";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getApplicant(req, res);
      break;
  }
};

const getApplicant = async (req, res) => {
  try {
    const { index, passportNumber } = req.query;

    const applicant = await VisaApplicant.findOne({
      _id: index,
      passportNumber,
    });

    res.json({
      status: "success",
      applicant,
    });
    console.log("applicant", filter);
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
