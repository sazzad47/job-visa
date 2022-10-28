import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../../../store/GlobalState";
import { getData } from "../../../utils/fetchData";
import InputField from "../../common/InputField";
import InputModal from "../../common/InputModal";

const LoanInfo = ({ totalCost, setTotalCost, setLoan, handleNext }) => {
  const [loading, setLoading] = useState(false);
  const [showAmountField, setShowAmountField] = useState(true);
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const { visaApplyID, jobApplyID, loanAmount } = state.loanApplicant.loanInfo;
  const emptyInput = !visaApplyID || !loanAmount;
  const [message, setMessage] = useState("");
  console.log('visaapplyid', visaApplyID)
  const getTotalCost = async () => {
    if (!visaApplyID) return;
    setLoading(true);
    const res = await getData(
      `totalCost?visaApplyID=${visaApplyID}`,
      auth.token
    );
    console.log("res", res);
    if (res.err) {
      setLoading(false);
      setMessage(res.err);
    } else {
      setLoading(false);
      setMessage(`Total Cost: $${res.totalCost}`);
      setTotalCost(res.totalCost);
    }
  };
  function percentageToActual() {
    const amountToApplyFor = (
      (parseInt(loanAmount) / 100) *
      parseInt(totalCost)
    ).toFixed(2);
    const invalidAmount = isNaN(amountToApplyFor);
    if (invalidAmount) return null;
    return amountToApplyFor;
  }
  const amountToApplyFor = percentageToActual();
  const handleNextPage = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    setLoan(amountToApplyFor);
    handleNext();
  };
  const handleNotify = () => {
    toast("Sorry! You can't apply for more than 70% loan.", { type: "error" });
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_LOAN_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (!visaApplyID) {
      setMessage("");
      setTotalCost("");
    }
    getTotalCost()
  }, [visaApplyID]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Visa Apply ID
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <div className="input_box">
              <input
                label=""
                type="text"
                name="visaApplyID"
                value={visaApplyID}
                onChange={handleInput}
                required={true}
              />

              <span className="line"></span>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Job Apply ID
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <InputField
              label=""
              type="text"
              name="jobApplyID"
              value={jobApplyID}
              onChange={handleInput}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="input_row">
          <Grid item xs={12} md={3} className="field_title">
            Total Rs
          </Grid>
          <Grid item xs={12} md={6} className="col_custom">
            <div className="loan-amount">
              {loading ? "loading..." : message ? message : null}
            </div>
          </Grid>
        </Grid>
        {totalCost && (
          <>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={3} className="field_title">
                Loan Amount
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
                    onClick={() => setShowAmountField(true)}
                    type="radio"
                    id="15%"
                    name="loanAmount"
                    value="15%"
                  />
                  <label className="radio_input_label" htmlFor="15%">
                    15%
                  </label>
                </Grid>
                <Grid item xs={4} md={4}>
                  <input
                    className="radio_input"
                    onChange={handleInput}
                    onClick={() => setShowAmountField(true)}
                    type="radio"
                    id="30%"
                    name="loanAmount"
                    value="30%"
                  />
                  <label className="radio_input_label" htmlFor="30%">
                    30%
                  </label>
                </Grid>
                <Grid item xs={4} md={4}>
                  <InputModal
                    handleInput={handleInput}
                    showOther={setShowAmountField}
                    name="loanAmount"
                    label="Ex. 40%"
                    placeholder=""
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <input
                    className="other_info_container"
                    hidden={showAmountField}
                    disabled
                    value={loanAmount}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {totalCost && loanAmount && (
          <>
            <Grid container spacing={2} className="input_row">
              <Grid item xs={12} md={3} className="field_title">
                Amount of Money
              </Grid>
              <Grid item xs={12} md={6} className="col_custom">
                <div className="loan-amount"> ${amountToApplyFor}</div>
              </Grid>
            </Grid>
          </>
        )}
        <Grid container spacing={2} className="input_row">
          <Grid
            item
            xs={12}
            md={12}
            className="col_custom d-flex justify-content-end"
          >
            <button
              disabled={!amountToApplyFor}
              onClick={parseInt(loanAmount) > 70 ? handleNotify : handleNext}
              type="submit"
            >
              Next
            </button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default LoanInfo;
