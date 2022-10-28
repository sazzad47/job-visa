import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { countries } from "../visa/data";
import InputModal from "../../common/InputModal";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";
import Select from "../../common/Select";

const PersonalInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const [showLanguagesField, setShowLanguagesField] = useState(true);
  const {
    languages,
    nationality,
    nidCard,
    firstName,
    middleName,
    surname,
    fathersNameFirst,
    fathersNameMiddle,
    fathersNameSurname,
    mothersNameFirst,
    mothersNameMiddle,
    mothersNameSurname,
    streetAddress,
    streetAddressLine2,
    city,
    province,
    postal,
    country,
    dateOfBirth,
    photo,
    signature,
  } = state.jobApplicant.appliantInfo;
  const emptyInput =
    !languages ||
    !nationality ||
    !nidCard ||
    !firstName ||
    !surname ||
    !fathersNameFirst ||
    !fathersNameSurname ||
    !mothersNameFirst ||
    !mothersNameSurname ||
    !streetAddress ||
    !streetAddressLine2 ||
    !city ||
    !province ||
    !postal ||
    !country ||
    !dateOfBirth ||
    !photo ||
    !signature;

 
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_JOB_APPLICANTS_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state);
  const countryList = countries.map((country, index) => (
    <option key={index} value={country.name}>
      {country.name}
    </option>
  ));
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            How many languages do you know?
          </Grid>
          <Grid
            style={{ marginTop: "30px" }}
            container
            spacing={2}
            xs={12}
            md={8}
            className="col_custom d-flex"
          >
            <Grid item xs={12} md={3}>
              <input
                className="radio_input"
                onChange={handleInput}
                onClick={() => setShowLanguagesField(true)}
                type="radio"
                id="English"
                name="languages"
                value="English"
              />
              <label className="radio_input_label" htmlFor="English">
                English
              </label>
            </Grid>
            <Grid item xs={12} md={3}>
              <input
                className="radio_input"
                onChange={handleInput}
                onClick={() => setShowLanguagesField(true)}
                type="radio"
                id="Hindi"
                name="languages"
                value="Hindi"
              />
              <label className="radio_input_label" htmlFor="Hindi">
                Hindi
              </label>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputModal
                handleInput={handleInput}
                showOther={setShowLanguagesField}
                name="languages"
                label="Enter the languages you know"
                placeholder=""
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <input
                className="other_info_container"
                hidden={showLanguagesField}
                disabled
                value={languages}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            What is your nationality?
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
            National ID card Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="nidCard"
              value={nidCard}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
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
        <Grid
          container
          sx={{ display: "flex", alignItems: "flex-start" }}
          spacing={2}
          className="input_row"
        >
          <Grid sx={{ mt: 3 }} item xs={12} md={3} className="field_title">
            Address
          </Grid>
          <Grid container spacing={2} xs={12} md={6} className="col_custom">
            <Grid sx={{ mb: 3 }} item xs={12} md={12}>
              <InputField
                label="Street Address"
                type="text"
                name="streetAddress"
                value={streetAddress}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 3 }} item xs={12} md={12}>
              <InputField
                label="Street Address Line 2"
                type="text"
                name="streetAddressLine2"
                value={streetAddressLine2}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 3 }} item xs={12} md={12}>
              <InputField
                label="City"
                type="text"
                name="city"
                value={city}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 3 }} item xs={12} md={12}>
              <InputField
                label="State/Province"
                type="text"
                name="province"
                value={province}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Postal/Zip Code"
                type="text"
                name="postal"
                value={postal}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <InputField
                label="Postal/Zip Code"
                type="text"
                name="postal"
                value={postal}
                onChange={handleInput}
                required={true}
              />
            </Grid>
            <Grid sx={{ mb: 4 }} item xs={12} md={12}>
              <div className="select_label">Country</div>
              <Select
                type="text"
                name="country"
                value={country}
                onChange={handleInput}
                required={true}
              >
                {countryList}
              </Select>
            </Grid>
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
            Your Photo
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="photo"
              type="CHANGE_JOB_APPLICANTS_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Your Signature
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="image/*"
              name="signature"
              type="CHANGE_JOB_APPLICANTS_INPUTS"
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

export default PersonalInfo;
