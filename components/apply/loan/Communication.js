import { Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Row } from "reactstrap";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import { imageUpload } from "../../../utils/imageUpload";

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
      <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
        <div className="mt-3">Email</div>
        <div className="visa-form-input">
          <TextField
            name="email"
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>

        <div className="mt-3">Phone Number</div>
        <div className="mt-3">
          <PhoneInput
            placeholder="Enter phone number"
            value={phnValue}
            onChange={handlePhn}
            required
          />
        </div>
        <div className="mt-3">Home Phone Number</div>
        <div className="mt-3">
          <PhoneInput
            placeholder="Enter your home phone number"
            value={homePhnValue}
            onChange={handleHomePhn}
            required
          />
        </div>
        <div className="mt-3 mb-3">Comments or Questions</div>
        <TextareaAutosize
          minRows={3}
          name="comments"
          onChange={handleInput}
          style={{ width: "100%" }}
        />
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

export default Communication;
