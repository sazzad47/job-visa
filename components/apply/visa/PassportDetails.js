import { Button, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useContext, useState } from "react";
import FileUpload from "./FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";

const PassportDetails = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    passportCountry,
    passportNumber,
    passportIssuingAuthority,
    passportDateOfBirth,
    passportDateOfIssue,
    passportDateOfExpiry,
    passportDocument,
  } = state.visaApplicant.passportInfo;
  const emptyInput =
    !passportCountry ||
    !passportNumber ||
    !passportIssuingAuthority ||
    !passportDateOfBirth ||
    !passportDateOfIssue ||
    !passportDateOfExpiry ||
    !passportDocument;
  const [dob, setDob] = useState(null);
  const [doi, setDoi] = useState(null);
  const [doe, setDoe] = useState(null);

  const handleDateOfBirth = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: "passportDateOfBirth", value: newValue },
    });
    setDob(newValue);
  };

  const handleDateOfIssue = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: "passportDateOfIssue", value: newValue },
    });
    setDoi(newValue);
  };

  const handleDateOfExpiry = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: "passportDateOfExpiry", value: newValue },
    });
    setDoe(newValue);
  };

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
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
        <div className="visa-form-input">
          <TextField
            name="passportCountry"
            onChange={handleInput}
            required
            fullWidth
            label="Country"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="passportNumber"
            onChange={handleInput}
            required
            fullWidth
            label="Passport Number"
            placeholder="Enter your passport number"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="passportIssuingAuthority"
            onChange={handleInput}
            required
            fullWidth
            label="Issuing Authority"
            variant="outlined"
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
        <div className="visa-form-input d-flex justify-content-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of Expiry"
              inputFormat="MM/DD/YYYY"
              value={doe}
              onChange={handleDateOfExpiry}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div className="mt-3 mb-2">Upload your passport</div>
        <FileUpload
          accept="application/pdf"
          name="passportDocument"
          type="CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS"
        />
        <div className="mt-4 d-flex align-items-center justify-content-between">
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" variant="contained" onClick={handleChangeStep}>
            Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PassportDetails;
