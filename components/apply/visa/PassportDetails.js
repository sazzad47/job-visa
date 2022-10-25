import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useContext, useState } from "react";
import FileUpload from "./FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";

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
    otherPassportIssuingAuthority,
    otherPassportIssuingPlace,
    otherPassportDateOfIssue,
    otherPassportDateOfExpiry,
    otherPassportNationality,
    otherPassportDocument,
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
    !isOtherPassport
  const [doi, setDoi] = useState(null);
  const [doe, setDoe] = useState(null);
  const [otherDoi, setOtherDoi] = useState(null);
  const [otherDoe, setOtherDoe] = useState(null);

 
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
  const handleOtherDateOfIssue = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: "otherPassportDateOfIssue", value: newValue },
    });
    setOtherDoi(newValue);
  };

  const handleOtherDateOfExpiry = (newValue) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS",
      payload: { name: "otherPassportDateOfExpiry", value: newValue },
    });
    setOtherDoe(newValue);
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
  console.log('paspporinfo', state.visaApplicant.passportInfo)
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
        <div className="visa-form-input">
          <TextField
            name="passportType"
            value={passportType}
            onChange={handleInput}
            required
            fullWidth
            label="Passport Type"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="passportNumber"
            value={passportNumber}
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
            value={passportIssuingAuthority}
            onChange={handleInput}
            required
            fullWidth
            label="Issuing Authority"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="passportIssuingPlace"
            value={passportIssuingPlace}
            onChange={handleInput}
            required
            fullWidth
            label="Country of Issue"
            variant="outlined"
          />
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
        <div className="visa-form-input">
          <TextField
            name="passportNationality"
            value={passportNationality}
            onChange={handleInput}
            required
            fullWidth
            label="Nationality/Status"
            variant="outlined"
          />
        </div>
        <div className="mt-3 mb-2">Upload your passport</div>
        <FileUpload
          accept="application/pdf"
          name="passportDocument"
          type="CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS"
        />
        <FormLabel sx={{mt:4}} id="isOtherPassport">Do you have any other passport/Identity Certificate?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="isOtherPassport"
          name="isOtherPassport"
          required
          
        >
          <FormControlLabel
            name="isOtherPassport"
            onChange={handleInput}
            value="yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            name="isOtherPassport"
            onChange={handleInput}
            value="no"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
        {
          isOtherPassport === "yes" && (
            <>
           
        <div className="visa-form-input">
          <TextField
            name="otherPassportNumber"
            value={otherPassportNumber}
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
            name="otherPassportIssuingAuthority"
            value={otherPassportIssuingAuthority}
            onChange={handleInput}
            required
            fullWidth
            label="Issuing Authority"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="otherPassportIssuingPlace"
            value={otherPassportIssuingPlace}
            onChange={handleInput}
            required
            fullWidth
            label="Country of Issue"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input d-flex justify-content-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of Issue"
              inputFormat="MM/DD/YYYY"
              value={otherDoi}
              onChange={handleOtherDateOfIssue}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="visa-form-input d-flex justify-content-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of Expiry"
              inputFormat="MM/DD/YYYY"
              value={otherDoe}
              onChange={handleOtherDateOfExpiry}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="visa-form-input">
          <TextField
            name="otherPassportNationality"
            value={otherPassportNationality}
            onChange={handleInput}
            required
            fullWidth
            label="Nationality/Status"
            variant="outlined"
          />
        </div>
        <div className="mt-3 mb-2">Upload your passport</div>
        <FileUpload
          accept="application/pdf"
          name="otherPassportDocument"
          type="CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS"
        />
            </>
          )
        }
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
