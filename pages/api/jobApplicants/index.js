import connectDB from "../../../utils/connectDB";
import JobApplicants from "../../../models/jobApplicant";
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

    const { jobInfo, appliantInfo, passportVisaDetails, communication } =
      req.body;
    const {
      fJobCountry,
      fJobNo,
      fJobSL,
      fJobName,
      fJobExperience,
      fJobExperienceCertificate,
      sJobCountry,
      sJobNo,
      sJobSL,
      sJobName,
      sJobExperience,
      sJobExperienceCertificate,
      tJobCountry,
      tJobNo,
      tJobSL,
      tJobName,
      tJobExperience,
      tJobExperienceCertificate,
      foJobCountry,
      foJobNo,
      foJobSL,
      foJobName,
      foJobExperience,
      foJobExperienceCertificate,
    } = jobInfo;

    const {
      languages,
      nationality,
      nidCard,
      fullName,
      fathersName,
      mothersName,
      streetAddress,
      streetAddressLine2,
      city,
      province,
      postal,
      country,
      dateOfBirth,
      photo,
      signature,
    } = appliantInfo;

    const {
      passportCountry,
      passportNumber,
      passportDateOfIssue,
      passportDateOfExpiry,
      visaApplicationID,
      medicalReport,
    } = passportVisaDetails;

    const { email, phoneNumber, homePhoneNumber } = communication;

    const newApplication = new JobApplicants({
      userId: result.userId,
      fJobCountry,
      fJobNo,
      fJobSL,
      fJobName,
      fJobExperience,
      fJobExperienceCertificate,
      sJobCountry,
      sJobNo,
      sJobSL,
      sJobName,
      sJobExperience,
      sJobExperienceCertificate,
      tJobCountry,
      tJobNo,
      tJobSL,
      tJobName,
      tJobExperience,
      tJobExperienceCertificate,
      foJobCountry,
      foJobNo,
      foJobSL,
      foJobName,
      foJobExperience,
      foJobExperienceCertificate,
      languages,
      nationality,
      nidCard,
      fullName,
      fathersName,
      mothersName,
      streetAddress,
      streetAddressLine2,
      city,
      province,
      postal,
      country,
      dateOfBirth,
      photo,
      signature,
      passportCountry,
      passportNumber,
      passportDateOfIssue,
      passportDateOfExpiry,
      visaApplicationID,
      medicalReport,
      email,
      phoneNumber,
      homePhoneNumber,
    });
    await Users.findOneAndUpdate(
      { _id: result.id },
      {
        $push: { jobApplications: newApplication._id },
      },
      { new: true }
    );
    await newApplication.save();
    await sendEmail({
      to: newApplication.email,
      from: process.env.SENDER_EMAIL,
      subject: "[job-visa] Received job application.",
      html: `
            <div>
              <p>Hello, ${newApplication.fullName}</p>
              <p>We received your job application.</p>
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

    const data = await JobApplicants.find({
      $and: [filter, { done: false }],
    })
      .skip(skip)
      .limit(limit)
      .sort(sort);
    const totalItem = await JobApplicants.find({ done: false });

    res.setHeader("x-total-count", parseInt(totalItem.length)).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
