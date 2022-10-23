import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { postData } from "../utils/fetchData";
import valid from "../utils/valid";
import Cookie from "js-cookie";
import { DataContext } from "../store/GlobalState";
import { useEffect } from "react";

const AuthVerifyEmail = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(DataContext);
  const { auth, register } = state;
  const { name, email, password, cf_password } = register;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
    setLoading(true);
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", { ...register, code: code });
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    setLoading(false);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);
  return (
    <React.Fragment>
      <div className="text-center">Verify Email</div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="input-box"
          placeholder="Enter the code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          {loading ? (
            <span className="checking-effect">Verifying...</span>
          ) : (
            "Verify"
          )}
        </button>
      </form>
    </React.Fragment>
  );
};

export default AuthVerifyEmail;
