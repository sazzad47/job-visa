import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../visa/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";

const ApplicantInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    idNumber,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photoOfApplicant,
    signature,
  } = state.loanApplicant.appliantInfo;
  const emptyInput =
    !idNumber ||
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photoOfApplicant ||
    !signature;
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="visa-form-input">
          <TextField
            name="idNumber"
            onChange={handleInput}
            required
            fullWidth
            label="ID Card Number"
            placeholder="Enter your ID card number"
            variant="outlined"
          />
        </div>
        <div className="mt-3 mb-2">Front Photo of your ID Card</div>
        <FileUpload
          accept="image/*"
          name="frontPhotoOfIdCard"
          type="CHANGE_LOAN_APPLICANTS_INPUTS"
        />
        <div className="mt-3 mb-2">Back Photo of your ID Card</div>
        <FileUpload
          accept="image/*"
          name="backPhotoOfIdCard"
          type="CHANGE_LOAN_APPLICANTS_INPUTS"
        />
        <div className="mt-3 mb-2">Your Photo</div>
        <FileUpload
          accept="image/*"
          name="photoOfApplicant"
          type="CHANGE_LOAN_APPLICANTS_INPUTS"
        />
        <div className="mt-3 mb-2">Your Signature</div>
        <FileUpload
          accept="image/*"
          name="signature"
          type="CHANGE_LOAN_APPLICANTS_INPUTS"
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

export default ApplicantInfo;
