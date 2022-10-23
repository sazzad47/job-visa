import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

export default function AddressForm({handleNext}) {
    const { state, dispatch } = useContext(DataContext);
    const {
        firstName,
        lastName,
        address1,
        address2,
        city,
        customer_state,
        zip,
        country,
      } = state.paymentInfo;
    
      const emptyInput = (
        !firstName ||
        !lastName ||
        !address1 ||
        !address2 ||
        !city ||
        !customer_state ||
        !zip ||
        !country
        )
    const handleInput = (e) => {
        dispatch({
          type: 'CHANGE_PAYMENT_INPUTS', 
          payload: {name: e.target.name, value: e.target.value}
        })
  
      }
    const handleChangeStep = () => {
    if (emptyInput) return toast('Please fill out all the fieds!', {type: 'error'})
    handleNext()
    }
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={firstName}
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={lastName}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            value={address1}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={address2}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={city}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer_state"
            name="customer_state"
            value={customer_state}
            label="State/Province/Region"
            fullWidth
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value={zip}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={country}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={handleInput}
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        <Grid item xs={12}>
            <div className='text-end'>

          <Button variant="contained" color="primary" onClick={handleChangeStep} >Next</Button>
            </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}