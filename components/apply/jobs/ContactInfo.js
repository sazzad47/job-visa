import { Grid } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import { imageUpload } from "../../../utils/imageUpload";
import InputField from "../../common/InputField";

const ContactInfo = ({ setLoading, setSuccess, handleBack }) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth, jobApplicant } = state;

  const {
    fJobExperienceCertificate,
    sJobExperienceCertificate,
    tJobExperienceCertificate,
    foJobExperienceCertificate,
  } = state.jobApplicant.jobInfo;

  const { photo, signature } = state.jobApplicant.appliantInfo;

  const { medicalReport } = state.jobApplicant.passportVisaDetails;

  const documents = {
    fJobExperienceCertificate,
    sJobExperienceCertificate,
    tJobExperienceCertificate,
    foJobExperienceCertificate,
    photo,
    signature,
    medicalReport,
  };
  Object.keys(documents).forEach((key) => {
    if (documents[key] === "") {
      delete documents[key];
    }
  });
  const validDocuments = Object.values(documents);
  const validKeys = Object.keys(documents);

  const [phnValue, setPhnValue] = useState(null);
  const [homePhnValue, setHomePhnValue] = useState(null);
  const recaptcha = useRef(null);
  const [isHuman, setIsHuman] = useState(false);

  function onChange(value) {
    setIsHuman(true);
  }

  const handlePhn = (newValue) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_CONTACT_INPUTS",
      payload: { name: "phoneNumber", value: newValue },
    });
    setPhnValue(newValue);
  };

  const handleHomePhn = (newValue) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_CONTACT_INPUTS",
      payload: { name: "homePhoneNumber", value: newValue },
    });
    setHomePhnValue(newValue);
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_CONTACT_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let media;
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    setLoading(true);
    media = await imageUpload(validDocuments);
    const mediaData = Object.assign.apply(
      {},
      validKeys.map((v, i) => ({ [v]: media[i] }))
    );

    const res = await postData(
      "jobApplicants",
      {
        ...jobApplicant,
        jobInfo: {
          ...jobApplicant.jobInfo,
          fJobExperienceCertificate: mediaData.fJobExperienceCertificate || "",
          sJobExperienceCertificate: mediaData.sJobExperienceCertificate || "",
          tJobExperienceCertificate: mediaData.tJobExperienceCertificate || "",
          foJobExperienceCertificate:
            mediaData.foJobExperienceCertificate || "",
        },
        appliantInfo: {
          ...jobApplicant.appliantInfo,
          photo: mediaData.photo || "",
          signature: mediaData.signature || "",
        },
        passportVisaDetails: {
          ...jobApplicant.passportVisaDetails,
          medicalReport: mediaData.medicalReport || "",
        },
      },
      auth.token
    );

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    setLoading(false);
    setSuccess(true);
    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Email
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="email"
              name="email"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Phone Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <PhoneInput
              placeholder="Enter your mobile number"
              value={phnValue}
              onChange={handlePhn}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Home Phone Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <PhoneInput
              placeholder="Enter your home mobile number"
              value={homePhnValue}
              onChange={handleHomePhn}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Verify that you are not a robot
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <ReCAPTCHA
              ref={recaptcha}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className="input_row">
          <Grid
            item
            xs={12}
            md={12}
            className="col_custom d-flex justify-content-between"
          >
            <button onClick={handleBack}>Back</button>
            <button disabled={!isHuman} type="submit">
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default ContactInfo;
