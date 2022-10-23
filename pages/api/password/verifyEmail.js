import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import Otp from "../../../models/passwordResetOtp";
import bcrypt from "bcrypt";
import sendEmail from "../../../utils/mail";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await emailSend(req, res);
      break;
  }
};

const emailSend = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({ err: "This email does not exist." });

    let otpCode = Math.floor(Math.random() * 10000 + 1);
    otpCode = parseInt(otpCode);
    let newOtp = new Otp({
      email: req.body.email,
      code: otpCode,
      expireIn: new Date().getTime() + 300 * 1000,
    });

    await newOtp.save();
    await sendEmail({
      to: req.body.email,
      from: process.env.SENDER_EMAIL,
      subject: "[job-visa] Verify Email.",
      html: `
            <div>
              <p>Hello, ${user.name}</p>
              <p>Your OTP is ${otpCode}. This will expire after 5 minutes.</p>
            </div>
            `,
    });
    res.json({
      msg: "Please check your email",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
