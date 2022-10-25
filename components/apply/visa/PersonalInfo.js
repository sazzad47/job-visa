import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useContext, useState } from "react";
import FileUpload from "./FileUpload";
import { DataContext } from "../../../store/GlobalState";
import InputModal from "../../InputModal";
import { toast } from "react-toastify";

const PersonalInfo = ({ handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const [showGenderField, setShowGenderField] = useState(true);
  const [showCardField, setShowCardField] = useState(true);
  const {
    IdentityCard,
    IdCardNumber,
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
    monthlyIncome,
    gender,
    dateOfBirth,
    dateOfIdCardIssue,
    religion,
    nationality,
    bloodGroup,
    maritalStatus,
    educationalQualification,
    languages,
    ieltsScore,
    ieltsDocument,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature,
  } = state.visaApplicant.personalInfo;
  const emptyInput =
    !IdentityCard ||
    !IdCardNumber ||
    !firstName ||
    !surname ||
    !fathersNameFirst ||
    !fathersNameSurname ||
    !mothersNameFirst ||
    !mothersNameSurname ||
    !currentJob ||
    !monthlyIncome ||
    !gender ||
    !dateOfBirth ||
    !dateOfIdCardIssue ||
    !religion ||
    !nationality ||
    !bloodGroup ||
    !maritalStatus ||
    !educationalQualification ||
    !languages ||
    !ieltsScore ||
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photo ||
    !signature;

  const [dob, setDob] = useState(null);
  const [doi, setDoi] = useState(null);

  const handleDateOfBirth = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS",
      payload: { name: "dateOfBirth", value: newValue },
    });
    setDob(newValue);
  };

  const handleDateOfIssue = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS",
      payload: { name: "dateOfIdCardIssue", value: newValue },
    });
    setDoi(newValue);
  };

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
        <FormLabel id="IdentityCard">Identity Card</FormLabel>
        <RadioGroup
          row
          aria-labelledby="IdentityCard"
          name="IdentityCard"
          required
        >
          <FormControlLabel
            name="IdentityCard"
            onChange={handleInput}
            onClick={() => setShowCardField(true)}
            value="National ID Card"
            control={<Radio />}
            label="National ID Card"
          />
          <FormControlLabel
            name="IdentityCard"
            onChange={handleInput}
            onClick={() => setShowCardField(true)}
            value="Passport"
            control={<Radio />}
            label="Passport"
          />
          <FormControlLabel
            name="IdentityCard"
            onChange={handleInput}
            onClick={() => setShowCardField(true)}
            value="Birth Certificate"
            control={<Radio />}
            label="Birth Certificate"
          />
          <InputModal
            handleInput={handleInput}
            showOther={setShowCardField}
            name="IdentityCard"
            label="Identity Card"
            placeholder="Enter your Identity Card"
          />
        </RadioGroup>
        <TextField
          hidden={showCardField}
          fullWidth
          disabled
          value={IdentityCard}
        />

        <div className="visa-form-input">
          <TextField
            name="IdCardNumber"
            value={IdCardNumber}
            onChange={handleInput}
            required
            fullWidth
            label="ID Card Number"
            placeholder="Enter your ID card number"
            variant="outlined"
          />
        </div>
        <div className="mt-3 mb-2">Full Name</div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              name="firstName"
              value={firstName}
              onChange={handleInput}
              required
              fullWidth
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="middleName"
              value={middleName}
              onChange={handleInput}
              fullWidth
              label="Middle Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="surname"
              value={surname}
              onChange={handleInput}
              required
              fullWidth
              label="Surname"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div className="mt-3 mb-2">Father's Name</div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              name="fathersNameFirst"
              value={fathersNameFirst}
              onChange={handleInput}
              required
              fullWidth
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="fathersNameMiddle"
              value={fathersNameMiddle}
              onChange={handleInput}
              fullWidth
              label="Middle Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="fathersNameSurname"
              value={fathersNameSurname}
              onChange={handleInput}
              required
              fullWidth
              label="Surname"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div className="mt-3 mb-2">Mother's Name</div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              name="mothersNameFirst"
              value={mothersNameFirst}
              onChange={handleInput}
              required
              fullWidth
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="mothersNameMiddle"
              value={mothersNameMiddle}
              onChange={handleInput}
              fullWidth
              label="Middle Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="mothersNameSurname"
              value={mothersNameSurname}
              onChange={handleInput}
              required
              fullWidth
              label="Surname"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div className="mt-3">Your occupation</div>
        <div className="visa-form-input">
          <TextField
            name="currentJob"
            value={currentJob}
            onChange={handleInput}
            required
            fullWidth
            placeholder="Enter your occupation"
            label="Your Occupation"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="monthlyIncome"
            value={monthlyIncome}
            onChange={handleInput}
            required
            fullWidth
            placeholder="Enter your monthly income"
            label="Monthly Income"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <FormLabel id="gender">Gender</FormLabel>
          <RadioGroup row aria-labelledby="gender" name="gender">
            <FormControlLabel
              name="gender"
              onChange={handleInput}
              onClick={() => setShowGenderField(true)}
              value="Male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              name="gender"
              onChange={handleInput}
              onClick={() => setShowGenderField(true)}
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <InputModal
              handleInput={handleInput}
              showOther={setShowGenderField}
              name="gender"
              label="Gender"
              placeholder="Enter your gender"
            />
          </RadioGroup>
          <TextField
            hidden={showGenderField}
            fullWidth
            disabled
            value={gender}
          />
        </div>
        <div className="visa-form-input d-flex justify-content-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="MM/DD/YYYY"
              value={dob}
              onChange={handleDateOfBirth}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="visa-form-input d-flex justify-content-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of ID Card Issue"
              inputFormat="MM/DD/YYYY"
              value={doi}
              onChange={handleDateOfIssue}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="visa-form-input">
          <TextField
            name="religion"
            onChange={handleInput}
            required
            fullWidth
            label="Religion"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="nationality"
            onChange={handleInput}
            required
            fullWidth
            label="Nationality"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="bloodGroup"
            onChange={handleInput}
            select
            fullWidth
            label="Blood Group"
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </TextField>
        </div>
        <div className="visa-form-input">
          <FormLabel id="maritalStatus">Marital Status</FormLabel>
          <RadioGroup row aria-labelledby="maritalStatus" name="maritalStatus">
            <FormControlLabel
              name="maritalStatus"
              onChange={handleInput}
              value="Single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              name="maritalStatus"
              onChange={handleInput}
              value="Married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              name="maritalStatus"
              onChange={handleInput}
              value="Divorced"
              control={<Radio />}
              label="Divorced"
            />
            <FormControlLabel
              name="maritalStatus"
              onChange={handleInput}
              value="Widow(er)"
              control={<Radio />}
              label="Widow(er)"
            />
          </RadioGroup>
        </div>
        <div className="mt-3">Educational Qualification</div>
        <div className="visa-form-input">
          <TextField
            name="educationalQualification"
            value={educationalQualification}
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mt-3">How many languages do you know?</div>
        <div className="visa-form-input">
          <TextField
            name="languages"
            value={languages}
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mt-3">IELTS Score</div>
        <div className="visa-form-input">
          <TextField
            name="ieltsScore"
            value={ieltsScore}
            onChange={handleInput}
            select
            fullWidth
            label=""
          >
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
          </TextField>
        </div>
        {ieltsScore !== "No" && (
          <>
            <div className="mt-3 mb-2">IELTS Document</div>
            <FileUpload
              accept="application/pdf"
              name="ieltsDocument"
              type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
            />
          </>
        )}
        <div className="mt-3 mb-2">Front Photo of your ID Card</div>
        <FileUpload
          accept="image/*"
          name="frontPhotoOfIdCard"
          type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
        />
        <div className="mt-3 mb-2">Back Photo of your ID Card</div>
        <FileUpload
          accept="image/*"
          name="backPhotoOfIdCard"
          type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
        />
        <div className="mt-3 mb-2">Your Photo</div>
        <FileUpload
          accept="image/*"
          name="photo"
          type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
        />
        <div className="mt-3 mb-2">Your Signature</div>
        <FileUpload
          accept="image/*"
          name="signature"
          type="CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS"
        />
        <div className="mt-4 d-flex align-items-center justify-content-end">
          <Button type="submit" variant="contained" onClick={handleChangeStep}>
            Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PersonalInfo;
