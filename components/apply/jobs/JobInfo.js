import { Grid } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const JobInfo = ({ handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    fJobCountry,
    fJobNo,
    fJobSL,
    fJobName,
    fJobExperience,
    fJobExperienceCertificate,
    sJobCountry,
    sJobNo,
    sJobSL,
    sJobName,
    sJobExperience,
    sJobExperienceCertificate,
    tJobCountry,
    tJobNo,
    tJobSL,
    tJobName,
    tJobExperience,
    tJobExperienceCertificate,
    foJobCountry,
    foJobNo,
    foJobSL,
    foJobName,
    foJobExperience,
    foJobExperienceCertificate,
  } = state.jobApplicant.jobInfo;
  const emptyInput =
    !fJobCountry ||
    !fJobNo ||
    !fJobSL ||
    !fJobName ||
    !fJobExperience ||
    !fJobExperienceCertificate ||
    !sJobCountry ||
    !sJobNo ||
    !sJobSL ||
    !sJobName ||
    !sJobExperience ||
    !sJobExperienceCertificate ||
    !tJobCountry ||
    !tJobNo ||
    !tJobSL ||
    !tJobName ||
    !tJobExperience ||
    !tJobExperienceCertificate ||
    !foJobCountry ||
    !foJobNo ||
    !foJobSL ||
    !foJobName ||
    !foJobExperience ||
    !foJobExperienceCertificate;

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_JOB_INPUTS",
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
        <Grid
          container
          sx={{ display: "flex", alignItems: "flex-start" }}
          spacing={2}
          className="input_row"
        >
          <Grid item xs={12} md={4} className="field_title">
            First Choice Job
          </Grid>
          <Grid container xs={12} md={6} className="col_custom">
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Country Name"
                type="text"
                name="fJobCountry"
                value={fJobCountry}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Post No."
                type="text"
                name="fJobNo"
                value={fJobNo}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job SL No."
                type="text"
                name="fJobSL"
                value={fJobSL}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Name"
                type="text"
                name="fJobName"
                value={fJobName}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Years of Experience"
                type="text"
                name="fJobExperience"
                value={fJobExperience}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={12} className="col_custom">
              <FileUpload
                label="Job Experience Certificate"
                accept="application/pdf"
                name="fJobExperienceCertificate"
                type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", alignItems: "flex-start" }}
          spacing={2}
          className="input_row"
        >
          <Grid item xs={12} md={4} className="field_title">
            Second Choice Job
          </Grid>
          <Grid container xs={12} md={6} className="col_custom">
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Country Name"
                type="text"
                name="sJobCountry"
                value={sJobCountry}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Post No."
                type="text"
                name="sJobNo"
                value={sJobNo}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job SL No."
                type="text"
                name="sJobSL"
                value={sJobSL}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Name"
                type="text"
                name="sJobName"
                value={sJobName}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Years of Experience"
                type="text"
                name="sJobExperience"
                value={sJobExperience}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={12} className="col_custom">
              <FileUpload
                label="Job Experience Certificate"
                accept="application/pdf"
                name="sJobExperienceCertificate"
                type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", alignItems: "flex-start" }}
          spacing={2}
          className="input_row"
        >
          <Grid item xs={12} md={4} className="field_title">
            Third Choice Job
          </Grid>
          <Grid container xs={12} md={6} className="col_custom">
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Country Name"
                type="text"
                name="tJobCountry"
                value={tJobCountry}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Post No."
                type="text"
                name="tJobNo"
                value={tJobNo}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job SL No."
                type="text"
                name="tJobSL"
                value={tJobSL}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Name"
                type="text"
                name="tJobName"
                value={tJobName}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Years of Experience"
                type="text"
                name="tJobExperience"
                value={tJobExperience}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={12} className="col_custom">
              <FileUpload
                label="Job Experience Certificate"
                accept="application/pdf"
                name="tJobExperienceCertificate"
                type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", alignItems: "flex-start" }}
          spacing={2}
          className="input_row"
        >
          <Grid item xs={12} md={4} className="field_title">
            Fourth Choice Job
          </Grid>
          <Grid container xs={12} md={6} className="col_custom">
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Country Name"
                type="text"
                name="foJobCountry"
                value={foJobCountry}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Post No."
                type="text"
                name="foJobNo"
                value={foJobNo}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job SL No."
                type="text"
                name="foJobSL"
                value={foJobSL}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 6 }} item xs={12} md={12}>
              <InputField
                label="Job Name"
                type="text"
                name="foJobName"
                value={foJobName}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Years of Experience"
                type="text"
                name="foJobExperience"
                value={foJobExperience}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={12} className="col_custom">
              <FileUpload
                label="Job Experience Certificate"
                accept="application/pdf"
                name="foJobExperienceCertificate"
                type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid
            item
            xs={12}
            md={12}
            className="col_custom d-flex justify-content-end"
          >
            <button type="submit" onClick={handleChangeStep}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default JobInfo;
