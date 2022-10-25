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
import { DataContext } from "../../../store/GlobalState";
import InputModal from "../../InputModal";
import { toast } from "react-toastify";

const HomeInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const [showDependenceField, setShowDependenceField] = useState(true);
  const {
    locatedAtHome,
    homeStreetAddress,
    homeStreetAddressLine2,
    homeCity,
    homeProvince,
    homePostal,
    homeStayDuration,
    familyDependentOn,
    familyMember,
  } = state.visaApplicant.home;
  const emptyInput =
    !locatedAtHome ||
    !homeStreetAddress ||
    !homeStreetAddressLine2 ||
    !homeCity ||
    !homeProvince ||
    !homePostal ||
    !homeStayDuration ||
    !familyDependentOn ||
    !familyMember
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_VISA_APPLICANTS_HOME_INPUTS",
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
        <FormLabel id="locatedAtHome">Located at the home address?</FormLabel>
        <RadioGroup row aria-labelledby="locatedAtHome" name="locatedAtHome">
          <FormControlLabel
            name="locatedAtHome"
            onChange={handleInput}
            value="Yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            name="locatedAtHome"
            onChange={handleInput}
            value="No"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
        <div className="mt-3">Your Current Position</div>
        <div className="visa-form-input">
          <TextField
            name="homeStreetAddress"
            onChange={handleInput}
            required
            fullWidth
            label="Street Address"
            variant="outlined"
          />
        </div>

        <div className="visa-form-input">
          <TextField
            name="homeStreetAddressLine2"
            onChange={handleInput}
            required
            fullWidth
            label="Street Address Line 2"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="homeCity"
            onChange={handleInput}
            required
            fullWidth
            label="City"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="homeProvince"
            onChange={handleInput}
            required
            fullWidth
            label="State/Province"
            variant="outlined"
          />
        </div>
        <div className="visa-form-input">
          <TextField
            name="homePostal"
            onChange={handleInput}
            required
            fullWidth
            label="Postal/Zip Code"
            variant="outlined"
          />
        </div>
        <div className="mt-3">How long you are in this address?</div>
        <div className="visa-form-input">
          <TextField
            name="homeStayDuration"
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <FormLabel className="mt-3" id="familyDependentOn">
          Who does your family depend on?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="familyDependentOn"
          name="familyDependentOn"
        >
          <FormControlLabel
            name="familyDependentOn"
            onChange={handleInput}
            onClick={() => setShowDependenceField(true)}
            value="My father"
            control={<Radio />}
            label="My father"
          />
          <FormControlLabel
            name="familyDependentOn"
            onChange={handleInput}
            onClick={() => setShowDependenceField(true)}
            value="My mother"
            control={<Radio />}
            label="My mother"
          />
          <FormControlLabel
            name="familyDependentOn"
            onChange={handleInput}
            onClick={() => setShowDependenceField(true)}
            value="Myself"
            control={<Radio />}
            label="Myself"
          />
          <InputModal
            handleInput={handleInput}
            showOther={setShowDependenceField}
            name="familyDependentOn"
            label="Who does your family depend on?"
            placeholder=""
          />
        </RadioGroup>
        <TextField
          hidden={showDependenceField}
          fullWidth
          disabled
          value={familyDependentOn}
        />
        <div className="mt-3">How many people are in your family?</div>
        <div className="visa-form-input">
          <TextField
            name="familyMember"
            onChange={handleInput}
            required
            fullWidth
            variant="outlined"
          />
        </div>
        
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

export default HomeInfo;
