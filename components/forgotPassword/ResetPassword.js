import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { patchData } from "../../utils/fetchData";
import LockResetIcon from "@mui/icons-material/LockReset";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Typography } from "@mui/material";
import Link from "next/link";
import validatePassword from "./validatePassword";

const ResetPassword = ({ email }) => {
  const [password, setPassword] = useState("");
  const [cf_password, setCf_password] = useState("");
  const [resetting, setResetting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { dispatch } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = validatePassword(password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
    setResetting(true);
    const res = await patchData("password/reset", { email, password });

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    setResetting(false);
    setSuccess(true);
  };

  return (
    <div className="verify-form">
      {success ? (
        <>
          <div className="verify-header-success">
            <div className="text-center mb-3">
              <CheckCircleOutlineIcon />
            </div>
            <Typography align="center">
              Password changed successfully!
            </Typography>
            <Typography
              align="center"
              style={{ fontSize: "12px", marginTop: "1rem" }}
            >
              Login with your new password.
            </Typography>
          </div>
          <div className="text-center">
            <Link href="/auth">
              <button className="login-btn-success">Login</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="verify-header">
            <div className="text-center mb-3">
              <LockResetIcon />
            </div>
            <Typography align="center">Reset Your Password</Typography>
            <Typography
              align="center"
              style={{ fontSize: "12px", marginTop: "1rem" }}
            >
              You are almost there! Enter new password.
            </Typography>
          </div>
          <form onSubmit={handleSubmit} className="mx-5">
            <input
              type="password"
              className="input-box"
              placeholder="Enter new password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="input-box"
              placeholder="Confirm password"
              name="cf_password"
              value={cf_password}
              onChange={(e) => setCf_password(e.target.value)}
              required
            />
            <div className="text-center">
              <button type="submit" className="submit-btn">
                {resetting ? (
                  <span className="checking-effect">Resetting...</span>
                ) : (
                  "Reset"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
