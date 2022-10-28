import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import InputModal from "../../common/InputModal";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const LandDocument = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const [showMediumField, setShowMediumField] = useState(true);
  const {
    landLocation,
    landAmount,
    mediumOfGetting,
    plotNo,
    houseLandDocuments,
    loanForm,
  } = state.loanApplicant.landDocument;
  const emptyInput =
    !landLocation ||
    !landAmount ||
    !mediumOfGetting ||
    !plotNo ||
    !houseLandDocuments ||
    !loanForm;
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_LAND_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state.visaApplicant);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} className="input_row">
        <Grid item xs={12} md={4} className="field_title">
          Where is the land located?
        </Grid>
        <Grid item xs={12} md={6} className="col_custom">
          <InputField
            label=""
            type="text"
            name="landLocation"
            value={landLocation}
            onChange={handleInput}
            required={true}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="input_row">
        <Grid item xs={12} md={4} className="field_title">
          What is the total amount of land?
        </Grid>
        <Grid item xs={12} md={6} className="col_custom">
          <InputField
            label=""
            type="text"
            name="landAmount"
            value={landAmount}
            onChange={handleInput}
            required={true}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "flex-start" }}
        className="input_row"
      >
        <Grid sx={{ mt: 4 }} item xs={12} md={4} className="field_title">
          How did you get this property?
        </Grid>
        <Grid
          style={{ marginTop: "30px" }}
          container
          spacing={2}
          xs={12}
          md={8}
          className="col_custom d-flex"
        >
          <Grid item xs={12} md={6}>
            <input
              className="radio_input"
              onChange={handleInput}
              onClick={() => setShowMediumField(true)}
              type="radio"
              id="Purchased property"
              name="mediumOfGetting"
              value="Purchased property"
            />
            <label className="radio_input_label" htmlFor="Purchased property">
              Purchased property
            </label>
          </Grid>
          <Grid item xs={12} md={6}>
            <input
              className="radio_input"
              onChange={handleInput}
              onClick={() => setShowMediumField(true)}
              type="radio"
              id="Father's property"
              name="mediumOfGetting"
              value="Father's property"
            />
            <label className="radio_input_label" htmlFor="Father's property">
              Father's property
            </label>
          </Grid>
          <Grid item xs={12} md={6}>
            <input
              className="radio_input"
              onChange={handleInput}
              onClick={() => setShowMediumField(true)}
              type="radio"
              id="Mother's property"
              name="mediumOfGetting"
              value="Mother's property"
            />
            <label className="radio_input_label" htmlFor="Mother's property">
              Mother's property
            </label>
          </Grid>
          <Grid item xs={12} md={6}>
            <input
              className="radio_input"
              onChange={handleInput}
              onClick={() => setShowMediumField(true)}
              type="radio"
              id="Grandfather's property"
              name="mediumOfGetting"
              value="Grandfather's property"
            />
            <label
              className="radio_input_label"
              htmlFor="Grandfather's property"
            >
              Grandfather's property
            </label>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputModal
              handleInput={handleInput}
              showOther={setShowMediumField}
              name="mediumOfGetting"
              label="Enter how you got the land"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <input
              className="other_info_container"
              hidden={showMediumField}
              disabled
              value={mediumOfGetting}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="input_row">
        <Grid item xs={12} md={4} className="field_title">
          Plot No
        </Grid>
        <Grid item xs={12} md={6} className="col_custom">
          <InputField
            label=""
            type="text"
            name="plotNo"
            value={plotNo}
            onChange={handleInput}
            required={true}
          />
        </Grid>
      </Grid>
      {mediumOfGetting !== "Purchased property" && (
        <>
          <Grid container spacing={2} className="input_row">
            <Grid item xs={12} md={4} className="field_title">
              Death Certificate
            </Grid>
            <Grid item xs={12} md={6} className="col_custom">
              <FileUpload
                accept="application/pdf"
                name="precursorDeathCertificate"
                type="CHANGE_LOAN_APPLICANTS_LAND_INPUTS"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="input_row">
            <Grid item xs={12} md={4} className="field_title">
              Inheritance Certificate
            </Grid>
            <Grid item xs={12} md={6} className="col_custom">
              <FileUpload
                accept="application/pdf"
                name="inheritanceCertificate"
                type="CHANGE_LOAN_APPLICANTS_LAND_INPUTS"
              />
            </Grid>
          </Grid>
        </>
      )}
      <Grid container spacing={2} className="input_row">
        <Grid item xs={12} md={4} className="field_title">
          Upload complete house land documents
        </Grid>
        <Grid item xs={12} md={6} className="col_custom">
          <FileUpload
            accept="application/pdf"
            name="houseLandDocuments"
            type="CHANGE_LOAN_APPLICANTS_LAND_INPUTS"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="input_row">
        <Grid item xs={12} md={4} className="field_title">
          Loan Form
        </Grid>
        <Grid item xs={12} md={6} className="col_custom">
          <FileUpload
            accept="application/pdf"
            name="loanForm"
            type="CHANGE_LOAN_APPLICANTS_LAND_INPUTS"
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
          <button type="submit" onClick={handleChangeStep}>
            Next
          </button>
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
};

export default LandDocument;
