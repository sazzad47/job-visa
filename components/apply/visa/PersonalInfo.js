import {
  Button,
  FormControlLabel,
  FormLabel,
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
    fullName,
    fathersName,
    mothersName,
    streetAddress,
    streetAddressLine2,
    city,
    province,
    postal,
    gender,
    dateOfBirth,
    dateOfIdCardIssue,
    religion,
    nationality,
    bloodGroup,
    maritalStatus,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature,
  } = state.visaApplicant.personalInfo;
  const emptyInput =
    !IdentityCard ||
    !IdCardNumber ||
    !fullName ||
    !fathersName ||
    !mothersName ||
    !streetAddress ||
    !streetAddressLine2 ||
    !city ||
    !province ||
    !postal ||
    !gender ||
    !dateOfBirth ||
    !dateOfIdCardIssue ||
    !religion ||
    !nationality ||
    !bloodGroup ||
    !maritalStatus ||
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
        <FormLabel id="identityCard">Identity Card</FormLabel>
        <RadioGroup
          row
          aria-labelledby="identityCard"
          name="identityCard"
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
            onChange={handleInput}
            required
            fullWidth
            label="ID Card Number"
            placeholder="Enter your ID card number"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="fullName"
            onChange={handleInput}
            required
            fullWidth
            label="Full Name"
            placeholder="Enter your full name"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="fathersName"
            onChange={handleInput}
            required
            fullWidth
            label="Father's Name"
            placeholder="Enter your father's name"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="mothersName"
            onChange={handleInput}
            required
            fullWidth
            label="Mother's Name"
            placeholder="Enter your mother's name"
            variant="outlined"
          />
        </div>
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
              label="Date of Issue"
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
