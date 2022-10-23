import connectDB from "../../utils/connectDB";
import LoanApplicant from "../../models/loanApplicant";

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
    const { index, idNumber } = req.query;

    const applicant = await LoanApplicant.findOne({
      index: parseInt(index),
      idNumber,
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
