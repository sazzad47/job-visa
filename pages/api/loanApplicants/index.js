import connectDB from "../../../utils/connectDB";
import LoanApplicants from "../../../models/loanApplicant";
import Users from "../../../models/userModel";
import auth from "../../../middleware/auth";
import sendEmail from "../../../utils/mail";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await apply(req, res);
      break;
    case "GET":
      await getApplicants(req, res);
      break;
  }
};

const apply = async (req, res) => {
  try {
    const result = await auth(req, res);

    const {
      loanInfo,
      appliantInfo,
      fatherInfo,
      motherInfo,
      landDocument,
      bankDetails,
      communication,
    } = req.body;
    const { visaApplyID, jobApplyID, totalRS, loanAmount, amountOfMoney } =
      loanInfo;

    const {
      idNumber,
      frontPhotoOfIdCard,
      backPhotoOfIdCard,
      photoOfApplicant,
      signature,
    } = appliantInfo;

    const {
      isFatherPresent,
      fatherDeathCertificate,
      fatherIdNumber,
      fatherFrontPhotoOfIdCard,
      fatherBackPhotoOfIdCard,
      photoOfFather,
      signatureOfFather,
    } = fatherInfo;

    const {
      isMotherPresent,
      motherDeathCertificate,
      motherIdNumber,
      motherFrontPhotoOfIdCard,
      motherBackPhotoOfIdCard,
      photoOfMother,
      signatureOfMother,
    } = motherInfo;

    const {
      landLocation,
      landAmount,
      mediumOfGetting,
      plotNo,
      precursorDeathCertificate,
      inheritanceCertificate,
      houseLandDocuments,
      loanForm,
    } = landDocument;

    const { bankName, accountIdNumber, bankBranchName, bankStatement } =
      bankDetails;

    const { email, phoneNumber, homePhoneNumber, comments } = communication;
    const newApplication = new LoanApplicants({
      userId: result.userId,
      visaApplyID,
      jobApplyID,
      totalRS,
      loanAmount,
      amountOfMoney,
      idNumber,
      frontPhotoOfIdCard,
      backPhotoOfIdCard,
      photoOfApplicant,
      signature,
      isFatherPresent,
      fatherDeathCertificate,
      fatherIdNumber,
      fatherFrontPhotoOfIdCard,
      fatherBackPhotoOfIdCard,
      photoOfFather,
      signatureOfFather,
      isMotherPresent,
      motherDeathCertificate,
      motherIdNumber,
      motherFrontPhotoOfIdCard,
      motherBackPhotoOfIdCard,
      photoOfMother,
      signatureOfMother,
      landLocation,
      landAmount,
      mediumOfGetting,
      plotNo,
      precursorDeathCertificate,
      inheritanceCertificate,
      houseLandDocuments,
      loanForm,
      bankName,
      accountIdNumber,
      bankBranchName,
      bankStatement,
      email,
      phoneNumber,
      homePhoneNumber,
      comments,
    });
    await Users.findOneAndUpdate(
      { _id: result.id },
      {
        $push: { loans: newApplication._id },
      },
      { new: true }
    );
    await newApplication.save();
    await sendEmail({
      to: newApplication.email,
      from: process.env.SENDER_EMAIL,
      subject: "[job-visa] Received loan application.",
      html: `
            <div>
              <p>Hello, ${result.name}</p>
              <p>We received your loan application.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error
               sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
               vitae dicta sunt explicabo.</p>
            </div>
            `,
    });
    res.json({ msg: "Application submitted successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getApplicants = async (req, res) => {
  try {
    const filter = JSON.parse(req.query.query);
    const sort = JSON.parse(req.query.sort);
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);

    const data = await LoanApplicants.find({
      $and: [filter, { done: false }],
    })
      .skip(skip)
      .limit(limit)
      .sort(sort);
    const totalItem = await LoanApplicants.find({ done: false });
    res.setHeader("x-total-count", parseInt(totalItem.length)).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
