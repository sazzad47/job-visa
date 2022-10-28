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
  const { auth, visaApplicant } = state;
  const {
    ieltsDocument,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature,
  } = state.visaApplicant.personalInfo;

  const { passportDocument, otherPassportDocument } =
    state.visaApplicant.passportInfo;

  const {
    flightReservation,
    inspectionCard,
    invitationLetter,
    utilityBill,
    policeClearanceCertificate,
    bankStatementOfLast6M,
    bankSolvencyCertificate,
  } = state.visaApplicant.visaProcessingInfo;

  const { bankStateDocument } = state.visaApplicant.bank;

  const { MedicalReportDocument } = state.visaApplicant.medical;

  const documents = {
    ieltsDocument,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature,
    passportDocument,
    otherPassportDocument,
    flightReservation,
    inspectionCard,
    invitationLetter,
    utilityBill,
    policeClearanceCertificate,
    bankStatementOfLast6M,
    bankSolvencyCertificate,
    bankStateDocument,
    MedicalReportDocument,
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
  const [telephoneNumber, setTelephoneNumber] = useState(null);
  const recaptcha = useRef(null);
  const [isHuman, setIsHuman] = useState(false);

  function onChange(value) {
    setIsHuman(true);
  }

  const handlePhn = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_CONTACT_INPUTS",
      payload: { name: "mobile", value: newValue },
    });
    setPhnValue(newValue);
  };

  const handleHomePhn = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_CONTACT_INPUTS",
      payload: { name: "homeMobile", value: newValue },
    });
    setHomePhnValue(newValue);
  };

  const handleTelephoneNumber = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_CONTACT_INPUTS",
      payload: { name: "telephone", value: newValue },
    });
    setTelephoneNumber(newValue);
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_CONTACT_INPUTS",
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
      "visaApplicants",
      {
        ...visaApplicant,
        personalInfo: {
          ...visaApplicant.personalInfo,
          ieltsDocument: mediaData.ieltsDocument || "",
          frontPhotoOfIdCard: mediaData.frontPhotoOfIdCard || "",
          backPhotoOfIdCard: mediaData.backPhotoOfIdCard || "",
          photo: mediaData.photo || "",
          signature: mediaData.signature || "",
        },
        passportInfo: {
          ...visaApplicant.passportInfo,
          passportDocument: mediaData.passportDocument || "",
          otherPassportDocument: mediaData.otherPassportDocument || "",
        },
        visaProcessingInfo: {
          ...visaApplicant.visaProcessingInfo,
          marriageCertificate: mediaData.marriageCertificate || "",
          flightReservation: mediaData.flightReservation || "",
          inspectionCard: mediaData.inspectionCard || "",
          invitationLetter: mediaData.invitationLetter || "",
          utilityBill: mediaData.utilityBill || "",
          policeClearanceCertificate:
            mediaData.policeClearanceCertificate || "",
          bankStatementOfLast6M: mediaData.bankStatementOfLast6M || "",
          bankSolvencyCertificate: mediaData.bankSolvencyCertificate || "",
        },
        bank: {
          ...visaApplicant.bank,
          bankStateDocument: mediaData.bankStateDocument || "",
        },
        medical: {
          ...visaApplicant.medical,
          MedicalReportDocument: mediaData.MedicalReportDocument || "",
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
            Address
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="streetAddress"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Street Address
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="streetAddressLine2"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            State/Country
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="province"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            City
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="city"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Zip Code
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="postal"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Email Address
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
            Home Email Address
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="email"
              name="homeEmail"
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Mobile /Cell No
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
            Home Phone No
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
            Telephone Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <PhoneInput
              placeholder="Enter your telephone number"
              value={telephoneNumber}
              onChange={handleTelephoneNumber}
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
