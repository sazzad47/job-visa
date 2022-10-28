import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";
import FileUpload from "../../common/FileUpload";

const PassportDetails = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    passportType,
    passportNumber,
    passportIssuingAuthority,
    passportIssuingPlace,
    passportDateOfIssue,
    passportDateOfExpiry,
    passportNationality,
    passportDocument,
    isOtherPassport,
    otherPassportNumber,
    otherPassportIssuingPlace,
    otherPassportDateOfIssue,
    otherPassportDateOfExpiry,
    otherPassportNationality,
    passportOrICNo,
  } = state.visaApplicant.passportInfo;
  const emptyInput =
    !passportType ||
    !passportNumber ||
    !passportIssuingAuthority ||
    !passportIssuingPlace ||
    !passportDateOfIssue ||
    !passportDateOfExpiry ||
    !passportNationality ||
    !passportDocument ||
    !isOtherPassport;

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
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
  console.log("paspporinfo", state.visaApplicant.passportInfo);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Passport Type
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportType"
              value={passportType}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
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
          <Grid item xs={12} md={4} className="field_title">
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
          <Grid item xs={12} md={4} className="field_title">
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
          <Grid item xs={12} md={4} className="field_title">
            Passport Issuing Authority
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportIssuingAuthority"
              value={passportIssuingAuthority}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Passport Issue Place
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportIssuingPlace"
              value={passportIssuingPlace}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Nationality/Status
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="passportNationality"
              value={passportNationality}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Upload Passport
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="passportDocument"
              type="CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Do you have any other Passport/Identity Certificate?
          </Grid>
          <Grid item xs={12} md={6} className="col_custom d-flex">
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="yes"
              name="isOtherPassport"
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
              name="isOtherPassport"
              value="No"
            />
            <label className="radio_input_label" htmlFor="no">
              No
            </label>
          </Grid>
        </Grid>
        {isOtherPassport === "Yes" && (
          <>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Passport Number
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="text"
                  name="otherPassportNumber"
                  value={otherPassportNumber}
                  onChange={handleInput}
                  required={true}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Date of Issue
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="date"
                  name="otherPassportDateOfIssue"
                  value={otherPassportDateOfIssue}
                  onChange={handleInput}
                  required={true}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Date of Expiry
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="date"
                  name="otherPassportDateOfExpiry"
                  value={otherPassportDateOfExpiry}
                  onChange={handleInput}
                  required={true}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Country of Issue
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="text"
                  name="otherPassportIssuingPlace"
                  value={otherPassportIssuingPlace}
                  onChange={handleInput}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Passport/IC No
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="text"
                  name="passportOrICNo"
                  value={passportOrICNo}
                  onChange={handleInput}
                  required={true}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={4} className="field_title">
                Nationality/Status
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <InputField
                  label=""
                  type="text"
                  name="otherPassportNationality"
                  value={otherPassportNationality}
                  onChange={handleInput}
                  required={true}
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
            <button onClick={handleBack}>Back</button>
            <button type="submit" onClick={handleNext}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default PassportDetails;
