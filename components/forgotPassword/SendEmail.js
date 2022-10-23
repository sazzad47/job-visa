import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fetchData";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Typography } from "@mui/material";

const SendEmail = ({ email, setEmail, handleOpenReset }) => {
  const [otp, setOtp] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [codeForm, setCodeForm] = useState(false);
  const { dispatch } = useContext(DataContext);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setSending(true);
    const res = await postData("password/verifyEmail", { email });

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    setSending(false);
    setCodeForm(true);
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    setVerifying(true);
    const res = await postData("password/reset", { email, otp });

    if (res.err) {
      setVerifying(false);
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    }
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    setVerifying(false);
    if (res.success === true) return handleOpenReset();
  };

  return (
    <div className="verify-form">
      <div className="verify-header">
        <div className="text-center mb-3">
          <LockResetIcon />
        </div>
        {codeForm ? (
          <>
            <Typography align="center">Verify your email</Typography>
            <Typography
              align="center"
              style={{ fontSize: "12px", marginTop: "1rem" }}
            >
              Please enter the OTP we sent to your email address.
            </Typography>
          </>
        ) : (
          <>
            <Typography align="center">Forgot your password?</Typography>
            <Typography
              align="center"
              style={{ fontSize: "12px", marginTop: "1rem" }}
            >
              That's okay, it happens! Enter your email address below to reset
              your password.
            </Typography>
          </>
        )}
      </div>
      <form onSubmit={codeForm ? handleVerify : handleSendOtp}>
        <input
          type={codeForm ? "number" : "email"}
          className="input-box"
          placeholder={codeForm ? "Enter your OTP" : "Enter your email"}
          name={codeForm ? "otp" : "email"}
          value={codeForm ? otp : email}
          onChange={(e) => {
            codeForm ? setOtp(e.target.value) : setEmail(e.target.value);
          }}
          required
        />
        {codeForm ? (
          <div className="text-center">
            <button type="submit" className="submit-btn">
              {verifying ? (
                <span className="checking-effect">Verifying...</span>
              ) : (
                "Verify"
              )}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button type="submit" className="submit-btn">
              {sending ? (
                <span className="checking-effect">Sending...</span>
              ) : (
                "Send OTP"
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SendEmail;
