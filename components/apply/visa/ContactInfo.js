import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Row } from "reactstrap";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import { imageUpload } from "../../../utils/imageUpload";

const ContactInfo = ({ setLoading, setSuccess, handleBack }) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth, visaApplicant } = state;
  const {ieltsDocument, frontPhotoOfIdCard, backPhotoOfIdCard, photo, signature } =
    state.visaApplicant.personalInfo;

  const { passportDocument, otherPassportDocument } = state.visaApplicant.passportInfo;

  const { 
  flightReservation,
  inspectionCard,
  invitationLetter,
  utilityBill,
  policeClearanceCertificate,
  bankStatementOfLast6M,
  bankSolvencyCertificate, } = state.visaApplicant.visaProcessingInfo;

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
          policeClearanceCertificate: mediaData.policeClearanceCertificate || "",
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
      <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
      <div className="mt-3">Address</div>
        <div className="visa-form-input">
          <TextField
            name="streetAddress"
            onChange={handleInput}
            required
            fullWidth
            label="Street Address"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="streetAddressLine2"
            onChange={handleInput}
            required
            fullWidth
            label="Street Address Line 2"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="city"
            onChange={handleInput}
            required
            fullWidth
            label="City"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="province"
            onChange={handleInput}
            required
            fullWidth
            label="State/Province"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="postal"
            onChange={handleInput}
            required
            fullWidth
            label="Postal/Zip Code"
            variant="outlined"
          />
        </div>
        <div className="mt-3">Email</div>
        <div className="visa-form-input">
          <TextField
            name="email"
            type='email'
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mt-3">Home Email</div>
        <div className="visa-form-input">
          <TextField
            name="homeEmail"
            type='email'
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mt-3">Mobile Number</div>
        <div className="mt-3">
          <PhoneInput
            placeholder="Enter your mobile number"
            value={phnValue}
            onChange={handlePhn}
            required
          />
        </div>
        <div className="mt-3">Home Mobile Number</div>
        <div className="mt-3">
          <PhoneInput
            placeholder="Enter your home mobile number"
            value={homePhnValue}
            onChange={handleHomePhn}
            required
          />
        </div>
        <div className="mt-3">Telephone</div>
        <div className="mt-3">
          <PhoneInput
            placeholder="Enter your telephone number"
            value={telephoneNumber}
            onChange={handleTelephoneNumber}
            required
          />
        </div>
        <Row className="d-flex mt-3">
          <div className="d-flex align-items-center justify-content-start mb-2">
            <Typography>Verify that you are not a robot</Typography>
          </div>
          <div className="recap d-none d-md-block">
            <ReCAPTCHA
              ref={recaptcha}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <div className="d-block d-md-none">
            <ReCAPTCHA
              ref={recaptcha}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
        </Row>
        <div className="mt-4 d-flex align-items-center justify-content-between">
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>

          <Button disabled={!isHuman} type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactInfo;
