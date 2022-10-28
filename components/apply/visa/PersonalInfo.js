import { Grid } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";
import Select from "../../common/Select";

const PersonalInfo = ({ handleNext }) => {
  const { state, dispatch } = useContext(DataContext);

  const {
    firstName,
    middleName,
    surname,
    fathersNameFirst,
    fathersNameMiddle,
    fathersNameSurname,
    mothersNameFirst,
    mothersNameMiddle,
    mothersNameSurname,
    currentJob,
    placeOfBirth,
    PlaceOfBirthCity,
    dateOfBirth,
    religion,
    nationality,
    bloodGroup,
    maritalStatus,
    educationalQualification,
    languages,
    ieltsDocument,
  } = state.visaApplicant.personalInfo;
  const emptyInput =
    !firstName ||
    !surname ||
    !fathersNameFirst ||
    !fathersNameSurname ||
    !mothersNameFirst ||
    !mothersNameSurname ||
    !currentJob ||
    !placeOfBirth ||
    !PlaceOfBirthCity ||
    !dateOfBirth ||
    !religion ||
    !nationality ||
    !bloodGroup ||
    !maritalStatus ||
    !educationalQualification ||
    !languages ||
    !ieltsDocument;

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS",
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

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Full Name
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Middle Name"
              type="text"
              name="middleName"
              value={middleName}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Surname"
              type="text"
              name="surname"
              value={surname}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Father's Name
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="First Name"
              type="text"
              name="fathersNameFirst"
              value={fathersNameFirst}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Middle Name"
              type="text"
              name="fathersNameMiddle"
              value={fathersNameMiddle}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Surname"
              type="text"
              name="fathersNameSurname"
              value={fathersNameSurname}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Mother's Name
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="First Name"
              type="text"
              name="mothersNameFirst"
              value={mothersNameFirst}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Middle Name"
              type="text"
              name="mothersNameMiddle"
              value={mothersNameMiddle}
              onChange={handleInput}
              required={true}
            />
          </Grid>
          <Grid item xs={4} md={3} className="col_custom">
            <InputField
              label="Surname"
              type="text"
              name="mothersNameSurname"
              value={mothersNameSurname}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Your Occupation
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="currentJob"
              value={currentJob}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Date Of Birth
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Place of Birth
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="placeOfBirth"
              value={placeOfBirth}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Place of Birth Town/City
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="PlaceOfBirthCity"
              value={PlaceOfBirthCity}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Current Nationality
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="nationality"
              value={nationality}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Religion
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="religion"
              value={religion}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Blood Group
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <Select
              label=""
              type="text"
              name="bloodGroup"
              value={bloodGroup}
              onChange={handleInput}
              required={true}
            >
              <option disabled value="">Select your blood group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Marital Status
          </Grid>
          <Grid item xs={12} md={6} className="col_custom d-flex">
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="single"
              name="maritalStatus"
              value="Single"
            />
            <label className="radio_input_label" htmlFor="single">
              Single
            </label>
            <br />
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="married"
              name="maritalStatus"
              value="Married"
            />
            <label className="radio_input_label" htmlFor="married">
              Married
            </label>
            <br />
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="divorced"
              name="maritalStatus"
              value="Divorced"
            />
            <label className="radio_input_label" htmlFor="divorced">
              Divorced
            </label>
            <input
              className="radio_input"
              onChange={handleInput}
              type="radio"
              id="widow(er)"
              name="maritalStatus"
              value="Widow(er)"
            />
            <label className="radio_input_label" htmlFor="widow(er)">
              Widow(er)
            </label>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Educational Qualification
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="educationalQualification"
              value={educationalQualification}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Main Language Spoken
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="languages"
              value={languages}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            IELTS Certificate
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="ieltsDocument"
              type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid
            item
            xs={12}
            md={12}
            className="col_custom d-flex justify-content-end"
          >
            <button type="submit" onClick={handleNext}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default PersonalInfo;
