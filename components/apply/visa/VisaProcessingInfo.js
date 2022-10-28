import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { countries } from "./data";
import { DataContext } from "../../../store/GlobalState";
import InputModal from "../../common/InputModal";
import { toast } from "react-toastify";
import Select from "../../common/Select";
import InputField from "../../common/InputField";
import FileUpload from "../../common/FileUpload";

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
    placeToStay,
  } = state.visaApplicant.visaProcessingInfo;
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
    !placeToStay;
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
    <option key={index} value={country.name}>
      {country.name}
    </option>
  ));
  console.log("visa info", state.visaApplicant.visaProcessingInfo);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Select your visa type
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <Select
              label=""
              type="text"
              name="visaType"
              value={visaType}
              onChange={handleInput}
              required={true}
            >
              <option disabled value="">Please select...</option>
              <option value="H1B visa">H1B visa</option>
              <option value="H2 visa">H2 visa</option>
              <option value="L visa">L visa</option>
              <option value="R visa">R visa</option>
              <option value="Q visa">Q visa</option>
              <option value="IR visa">IR visa</option>
              <option value="EB-1">EB-1</option>
              <option value="EB-2">EB-2</option>
              <option value="EB-3">EB-3</option>
              <option value="EB-5">EB-5</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Visa Issue Country
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <Select
              label=""
              type="text"
              name="visaIssueCountry"
              value={visaIssueCountry}
              onChange={handleInput}
              required={true}
            >
              <option disabled value="">Please select...</option>
              {countryList}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Visa Duration &#40;Month Year&#41;
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="number"
              name="visaDuration"
              value={visaDuration}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Visa Issued Place
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="visaIssuingPlace"
              value={visaIssuingPlace}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Date Of Entry
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="date"
              name="entryDate"
              value={entryDate}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Stay Duration &#40;Days&#41;
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="number"
              name="stayDuration"
              value={stayDuration}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Flight Reservation
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="flightReservation"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Inspection Card
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="inspectionCard"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Invitation Letter
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="invitationLetter"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Utility Bill
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="utilityBill"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Police Clearance Certificate
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="policeClearanceCertificate"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Bank Statement of Last 06 Months Certificate
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="bankStatementOfLast6M"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Bank Solvency Certificate
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="bankSolvencyCertificate"
              type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Place to stay
          </Grid>
          <Grid
            style={{ marginTop: "30px" }}
            container
            spacing={2}
            xs={12}
            md={8}
            className="col_custom d-flex"
          >
            <Grid item xs={4} md={4}>
              <input
                className="radio_input"
                onChange={handleInput}
                onClick={() => setShowPlaceField(true)}
                type="radio"
                id="Hotel booking"
                name="placeToStay"
                value="Hotel booking"
              />
              <label className="radio_input_label" htmlFor="Hotel booking">
                Hotel booking
              </label>
            </Grid>
            <Grid item xs={4} md={4}>
              <input
                className="radio_input"
                onChange={handleInput}
                onClick={() => setShowPlaceField(true)}
                type="radio"
                id="Relatives house"
                name="placeToStay"
                value="Relatives house"
              />
              <label className="radio_input_label" htmlFor="Relatives house">
                Relatives house
              </label>
            </Grid>
            <Grid item xs={4} md={4}>
              <InputModal
                handleInput={handleInput}
                showOther={setShowPlaceField}
                name="placeToStay"
                label="Place to stay"
                placeholder=""
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <input
                className="other_info_container"
                hidden={showPlaceField}
                disabled
                value={placeToStay}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid
            item
            xs={12}
            md={12}
            className="col_custom d-flex justify-content-between"
          >
            <button onClick={handleBack}>Back</button>
            <button type="submit" onClick={handleChangeStep}>
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default VisaProcessingInfo;
