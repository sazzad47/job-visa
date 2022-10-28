import { Grid } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../../common/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const BankDetails = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const { bankName, accountIdNumber, bankBranchName, bankStatement } =
    state.loanApplicant.bankDetails;
  const emptyInput =
    !bankName || !accountIdNumber || !bankBranchName || !bankStatement;

  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_BANK_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Bank Name
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="bankName"
              value={bankName}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Account ID Number
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="accountIdNumber"
              value={accountIdNumber}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Bank Branch Name
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="bankBranchName"
              value={bankBranchName}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={4} className="field_title">
            Bank Statement
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <FileUpload
              accept="application/pdf"
              name="bankStatement"
              type="CHANGE_LOAN_APPLICANTS_BANK_INPUTS"
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

export default BankDetails;
