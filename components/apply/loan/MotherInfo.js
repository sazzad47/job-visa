import { Grid } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const MotherInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    isMotherPresent,
    motherIdNumber,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
  } = state.loanApplicant.motherInfo;
  const emptyInput =
    !isMotherPresent ||
    !motherIdNumber ||
    !motherFrontPhotoOfIdCard ||
    !motherBackPhotoOfIdCard ||
    !photoOfMother;
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Is your mother alive?
          </Grid>
          <Grid item xs={12} md={6} className="col_custom d-flex">
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="yes"
              name="isMotherPresent"
              value="Yes"
            />
            <label className="radio_input_label" htmlFor="yes">
              Yes
            </label>
            <br />
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="no"
              name="isMotherPresent"
              value="No"
            />
            <label className="radio_input_label" htmlFor="no">
              No
            </label>
          </Grid>
        </Grid>
        {isMotherPresent === "No" && (
          <>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Death Certificate
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <FileUpload
                  accept="application/pdf"
                  name="motherDeathCertificate"
                  type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
                />
              </Grid>
            </Grid>
          </>
        )}
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            NID Card Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="motherIdNumber"
              value={motherIdNumber}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Front photo of NID card
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="motherFrontPhotoOfIdCard"
              type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Back photo of NID card
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="motherBackPhotoOfIdCard"
              type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Mother's Photo
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="photoOfMother"
              type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
            />
          </Grid>
        </Grid>
        {isMotherPresent === "Yes" && (
          <>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Mother's Signature
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <FileUpload
                  accept="image/*"
                  name="signatureOfMother"
                  type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
                />
              </Grid>
            </Grid>
          </>
        )}
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

export default MotherInfo;
