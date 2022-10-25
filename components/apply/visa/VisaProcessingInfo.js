import {
  Button,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import FileUpload from "./FileUpload";
import { countries } from "./data";
import { DataContext } from "../../../store/GlobalState";
import InputModal from "../../InputModal";
import { toast } from "react-toastify";

const VisaProcessingInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const [showPlaceField, setShowPlaceField] = useState(true);
  const { 
    visaType,
    visaIssueCountry,
    visaDuration,
    visaIssuingPlace,
    entryDate,
    stayDuration,
    flightReservation,
    inspectionCard,
    invitationLetter,
    utilityBill,
    policeClearanceCertificate,
    bankStatementOfLast6M,
    bankSolvencyCertificate,
    placeToStay
   } =
    state.visaApplicant.visaProcessingInfo;
  const emptyInput =
        !visaType ||
        !visaIssueCountry ||
        !visaDuration ||
        !visaIssuingPlace ||
        !entryDate ||
        !stayDuration ||
        !flightReservation ||
        !inspectionCard ||
        !invitationLetter ||
        !utilityBill ||
        !policeClearanceCertificate ||
        !bankStatementOfLast6M ||
        !bankSolvencyCertificate ||
        !placeToStay
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_VISA_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };

  const countryList = countries.map((country, index) => (
    <MenuItem key={index} value={country.name}>
      {country.name}
    </MenuItem>
  ));
  console.log('visa info', state.visaApplicant.visaProcessingInfo)
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <div className="mt-3">Select your visa type</div>
        <div className="visa-form-input">
          <TextField
            name="visaType"
            value={visaType}
            onChange={handleInput}
            required
            select
            fullWidth
            label=""
          >
            <MenuItem value="H1B visa">H1B visa</MenuItem>
            <MenuItem value="H2 visa">H2 visa</MenuItem>
            <MenuItem value="L visa">L visa</MenuItem>
            <MenuItem value="R visa">R visa</MenuItem>
            <MenuItem value="Q visa">Q visa</MenuItem>
            <MenuItem value="IR visa">IR visa</MenuItem>
            <MenuItem value="EB-1">EB-1</MenuItem>
            <MenuItem value="EB-2">EB-2</MenuItem>
            <MenuItem value="EB-3">EB-3</MenuItem>
            <MenuItem value="EB-5">EB-5</MenuItem>
          </TextField>
        </div>
        
        <div className="mt-3">Visa Issue Country</div>
        <div className="visa-form-input mb-3">
          <TextField
            name="visaIssueCountry"
            onChange={handleInput}
            required
            select
            fullWidth
            label=""
          >
            {countryList}
          </TextField>
        </div>
        <div>Visa Duration &#40;Month Year&#41;</div>
        <div className="visa-form-input mb-3">
          <TextField
            name="visaDuration"
            value={visaDuration}
            onChange={handleInput}
            required
            fullWidth
            label=""
            placeholder="Enter your visa duration"
          />
        </div>
        <div>Visa Issued Place</div>
        <div className="visa-form-input mb-3">
          <TextField
            name="visaIssuingPlace"
            value={visaIssuingPlace}
            onChange={handleInput}
            required
            fullWidth
            label=""
            placeholder="Enter your visa issued place"
          />
        </div>
        <div>Entry Date</div>
        <div className="visa-form-input mb-3">
          <TextField
            name="entryDate"
            value={entryDate}
            onChange={handleInput}
            required
            fullWidth
            label=""
            placeholder="Enter your entry date"
          />
        </div>
        <div>Stay Duration &#40;Days&#41;</div>
        <div className="visa-form-input mb-3">
          <TextField
            name="stayDuration"
            value={stayDuration}
            onChange={handleInput}
            required
            fullWidth
            label=""
            placeholder="Enter your visa duration"
          />
        </div>
        <div className="mt-3 mb-2">Flight Reservation</div>
            <FileUpload
              accept="application/pdf"
              name="flightReservation"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
          />
        <div className="mt-3 mb-2">Inspection Card</div>
            <FileUpload
              accept="application/pdf"
              name="inspectionCard"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
          />
        <div className="mt-3 mb-2">Invitation Letter</div>
            <FileUpload
              accept="application/pdf"
              name="invitationLetter"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
          />
        <div className="mt-3 mb-2">Utility Bill</div>
            <FileUpload
              accept="image/*"
              name="utilityBill"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
          />
        <div className="mt-3 mb-2">Police Clearance Certificate</div>
          <FileUpload
            accept="application/pdf"
            name="policeClearanceCertificate"
            type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
        />
        <div className="mt-3 mb-2">Bank statement of last 06 months certificate</div>
          <FileUpload
            accept="application/pdf"
            name="bankStatementOfLast6M"
            type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
        />
        <div className="mt-3 mb-2">Bank Solvency Certificate</div>
          <FileUpload
            accept="application/pdf"
            name="bankSolvencyCertificate"
            type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
        />
        <FormLabel className="mt-4" id="placeToStay">
          Place to stay
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="placeToStay"
          name="placeToStay"
        >
          <FormControlLabel
            name="placeToStay"
            onChange={handleInput}
            onClick={() => setShowPlaceField(true)}
            value="Hotel booking "
            control={<Radio />}
            label="Hotel booking"
          />
          <FormControlLabel
            name="placeToStay"
            onChange={handleInput}
            onClick={() => setShowPlaceField(true)}
            value="Relatives house"
            control={<Radio />}
            label="Relatives house"
          />
          <InputModal
            handleInput={handleInput}
            showOther={setShowPlaceField}
            name="placeToStay"
            label="Place to stay"
            placeholder=""
          />
        </RadioGroup>
        <TextField
          hidden={showPlaceField}
          fullWidth
          disabled
          value={placeToStay}
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

export default VisaProcessingInfo;
