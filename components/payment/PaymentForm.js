import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, CircularProgress, Radio, RadioGroup } from "@mui/material";
import { getData } from "../../utils/fetchData";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";

export default function PaymentForm({ handleBack, handleNext }) {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const [loading, setLoading] = useState(false);
  const [totalCost, setTotalCost] = useState("");

  const { visaApplyID, method } = state.paymentInfo;

  const [message, setMessage] = useState("");
  const getTotalCost = async () => {
    if (!visaApplyID) return;
    setLoading(true);
    const res = await getData(
      `totalCost?visaApplyID=${visaApplyID}`,
      auth.token
    );

    if (res.err) {
      setLoading(false);
      setMessage(res.err);
    } else {
      let cost = res.totalCost;
      setTotalCost(cost);

      setLoading(false);
      setMessage(`Total Cost: $${res.totalCost}`);
    }
  };

  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_PAYMENT_INPUTS",
      payload: {
        name: e.target.name,
        value: e.target.value,
        amount: totalCost,
      },
    });
  };

  useEffect(() => {
    if (!visaApplyID) {
      setMessage("");
      setTotalCost("");
    }
  }, [visaApplyID]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="visaApplyID"
            type="number"
            onChange={handleInput}
            onKeyUp={getTotalCost}
            required
            fullWidth
            label="Visa Apply ID"
            placeholder="Enter your visa apply ID"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} className="text-center">
          <Typography textAlign="start">Total Amount</Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="loan-amount"> {message ? message : null} </div>
          )}
        </Grid>
        <Grid item xs={12} className="text-center">
          <Typography textAlign="start">Choose payment method</Typography>
          <RadioGroup row aria-labelledby="method" name="method" required>
            <FormControlLabel
              name="method"
              onChange={handleInput}
              value="card"
              control={<Radio />}
              label="Card"
            />
            <FormControlLabel
              name="method"
              onChange={handleInput}
              value="bank"
              control={<Radio />}
              label="Bank"
            />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} className="d-flex justify-content-between">
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
          <Button
            disabled={!totalCost || !method}
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
