import { Grid } from "@mui/material";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";
import React, { useContext } from "react";

const HomeInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    passportCountry,
    passportNumber,
    passportDateOfIssue,
    passportDateOfExpiry,
    visaApplicationID,
    medicalReport,
  } = state.jobApplicant.passportVisaDetails;
  const emptyInput =
    !passportCountry ||
    !passportNumber ||
    !passportDateOfIssue ||
    !passportDateOfExpiry ||
    !visaApplicationID ||
    !medicalReport;

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Passport Country Name
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportCountry"
              value={passportCountry}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Passport Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportNumber"
              value={passportNumber}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Date of Issue
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="date"
              name="passportDateOfIssue"
              value={passportDateOfIssue}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Date of Expiry
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="date"
              name="passportDateOfExpiry"
              value={passportDateOfExpiry}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Visa Application ID
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="visaApplicationID"
              value={visaApplicationID}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Medical Report
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="medicalReport"
              type="CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS"
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
            <button type="submit" onClick={handleBack}>
              Back
            </button>
            <button type="submit" onClick={handleChangeStep}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default HomeInfo;
