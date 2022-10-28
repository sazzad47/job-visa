import { Grid } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const ApplicantInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    idNumber,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photoOfApplicant,
    signature,
  } = state.loanApplicant.appliantInfo;
  const emptyInput =
    !idNumber ||
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photoOfApplicant ||
    !signature;
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            NID Card Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="idNumber"
              value={idNumber}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Front photo of your NID card
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="frontPhotoOfIdCard"
              type="CHANGE_LOAN_APPLICANTS_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Back photo of your NID card
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="backPhotoOfIdCard"
              type="CHANGE_LOAN_APPLICANTS_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Your Photo
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="photoOfApplicant"
              type="CHANGE_LOAN_APPLICANTS_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Your Signature
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="signature"
              type="CHANGE_LOAN_APPLICANTS_INPUTS"
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
            <button type="submit" onClick={handleNext}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default ApplicantInfo;
