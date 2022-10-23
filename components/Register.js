import { useState, useContext } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import GoogleAuth from "./GoogleAuth";

const Register = ({ setSuccess, handleOpenLogin }) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  const { register } = state;
  const { name, email, password, cf_password } = register;

  const handleChangeInput = (e) => {
    dispatch({
      type: "CHANGE_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    setLoading(true);
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/verifyEmail", register);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div>
      <h4>Register</h4>
      <GoogleAuth />
      <h2 className="googleLoginOr">
        <span>Or</span>
      </h2>
      <form onSubmit={verifyEmail}>
        <input
          type="text"
          className="input-box"
          placeholder="Your Name"
          name="name"
          onChange={handleChangeInput}
          required
        />
        <input
          type="email"
          className="input-box"
          placeholder="Your email"
          name="email"
          onChange={handleChangeInput}
          required
        />
        <input
          type="password"
          className="input-box"
          placeholder="Password"
          name="password"
          onChange={handleChangeInput}
          required
        />
        <input
          type="password"
          className="input-box"
          placeholder="Confirm password"
          name="cf_password"
          onChange={handleChangeInput}
          required
        />
        <button type="submit" className="submit-btn">
          {loading ? <span className="checking-effect">...</span> : "Submit"}
        </button>
      </form>
      <button type="button" className="butn" onClick={handleOpenLogin}>
        I have an account
      </button>
    </div>
  );
};

export default Register;
