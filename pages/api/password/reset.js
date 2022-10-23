import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import auth from "../../../middleware/auth";
import bcrypt from "bcrypt";
import Otp from "../../../models/passwordResetOtp";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await verifyCode(req, res);
      break;
    case "PATCH":
      await changePassword(req, res);
      break;
  }
};

const verifyCode = async (req, res) => {
  const { email, otp } = req.body;

  try {
    let data = await Otp.findOne({ $and: [{ email }, { code: otp }] });
    console.log("code", data);
    if (!data) return res.status(400).json({ err: "Invalid OTP" });

    let currentTime = new Date().getTime();
    let diff = data.expireIn - currentTime;
    if (diff < 0) return res.status(400).json({ err: "OTP expired!" });

    res.json({
      msg: "Please reset your password",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
const changePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 12);
    await Users.findOneAndUpdate({ email }, { password: passwordHash });
    res.json({ msg: "Password changed successfully!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
