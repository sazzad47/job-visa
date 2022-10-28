import { Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Row } from "reactstrap";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import { imageUpload } from "../../../utils/imageUpload";
import InputField from "../../common/InputField";
import TextArea from "../../common/TextArea";

const Communication = ({
  totalCost,
  loan,
  setLoading,
  setSuccess,
  handleBack,
}) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth, loanApplicant } = state;
  const { frontPhotoOfIdCard, backPhotoOfIdCard, photoOfApplicant, signature } =
    state.loanApplicant.appliantInfo;

  const {
    fatherDeathCertificate,
    fatherFrontPhotoOfIdCard,
    fatherBackPhotoOfIdCard,
    photoOfFather,
    signatureOfFather,
  } = state.loanApplicant.fatherInfo;

  const {
    motherDeathCertificate,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
    signatureOfMother,
  } = state.loanApplicant.motherInfo;

  const {
    precursorDeathCertificate,
    inheritanceCertificate,
    houseLandDocuments,
    loanForm,
  } = state.loanApplicant.landDocument;

  const { bankStatement } = state.loanApplicant.bankDetails;

  const documents = {
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photoOfApplicant,
    signature,
    fatherDeathCertificate,
    fatherFrontPhotoOfIdCard,
    fatherBackPhotoOfIdCard,
    photoOfFather,
    signatureOfFather,
    motherDeathCertificate,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
    signatureOfMother,
    precursorDeathCertificate,
    inheritanceCertificate,
    houseLandDocuments,
    loanForm,
    bankStatement,
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
      type: "CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS",
      payload: { name: "phoneNumber", value: newValue },
    });
    setPhnValue(newValue);
  };

  const handleHomePhn = (newValue) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS",
      payload: { name: "homePhoneNumber", value: newValue },
    });
    setHomePhnValue(newValue);
  };

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let media;
    setLoading(true);
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    media = await imageUpload(validDocuments);
    const mediaData = Object.assign.apply(
      {},
      validKeys.map((v, i) => ({ [v]: media[i] }))
    );

    const res = await postData(
      "loanApplicants",
      {
        ...loanApplicant,
        loanInfo: {
          ...loanApplicant.loanInfo,
          totalRS: totalCost,
          amountOfMoney: loan,
        },
        appliantInfo: {
          ...loanApplicant.appliantInfo,
          frontPhotoOfIdCard: mediaData.frontPhotoOfIdCard || "",
          backPhotoOfIdCard: mediaData.backPhotoOfIdCard || "",
          photoOfApplicant: mediaData.photoOfApplicant || "",
          signature: mediaData.signature || "",
        },
        fatherInfo: {
          ...loanApplicant.fatherInfo,
          fatherDeathCertificate: mediaData.fatherDeathCertificate || "",
          fatherFrontPhotoOfIdCard: mediaData.fatherFrontPhotoOfIdCard || "",
          fatherBackPhotoOfIdCard: mediaData.fatherBackPhotoOfIdCard || "",
          photoOfFather: mediaData.photoOfFather || "",
          signatureOfFather: mediaData.signatureOfFather || "",
        },
        motherInfo: {
          ...loanApplicant.motherInfo,
          motherDeathCertificate: mediaData.motherDeathCertificate || "",
          motherFrontPhotoOfIdCard: mediaData.motherFrontPhotoOfIdCard || "",
          motherBackPhotoOfIdCard: mediaData.motherBackPhotoOfIdCard || "",
          photoOfMother: mediaData.photoOfMother || "",
          signatureOfMother: mediaData.signatureOfMother || "",
        },
        landDocument: {
          ...loanApplicant.landDocument,
          precursorDeathCertificate: mediaData.precursorDeathCertificate || "",
          inheritanceCertificate: mediaData.inheritanceCertificate || "",
          houseLandDocuments: mediaData.houseLandDocuments || "",
          loanForm: mediaData.loanForm || "",
        },
        bankDetails: {
          ...loanApplicant.bankDetails,
          bankStatement: mediaData.bankStatement || "",
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

export default Communication;
