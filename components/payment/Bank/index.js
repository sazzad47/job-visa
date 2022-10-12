import { Box, Button, CircularProgress, Grid, Paper, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Review from '../Review';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { getData, postData } from '../../../utils/fetchData';
import { useRouter } from 'next/router';
import PaymentMessage from '../../PaymentMessage';
import { DataContext } from '../../../store/GlobalState';
import Form from './Form';

const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);



const Index = () => {
  const { state, dispatch } = useContext(DataContext);
  const {auth} = state
  const [loading, setLoading] = useState(false);
  const [totalCost, setTotalCost] = useState('');
  const [start, setStart] = useState(false)
  const router = useRouter();
  const { status } = router.query;

  const {
    visaApplyID,
    jobApplyID,
  
  } = state.paymentInfo;
   
   

      const getTotalCost = async() => {
        setLoading(true)
        const res = await getData(
          `totalCost?visaApplyID=${visaApplyID}&jobApplyID=${jobApplyID}`, auth.token
        )
        // if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        setTotalCost(res.totalCost)
        setLoading(false);
      }

      const handleInput = (e) => {
      
        dispatch({
          type: 'CHANGE_PAYMENT_INPUTS', 
          payload: {name: e.target.name, value: e.target.value}
        })
  
      }
      
     
      
  return (
    <> 
     {start? 
     <Form totalCost={totalCost} /> 
     :
     <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography className='mb-4' component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField name='visaApplyID' onChange={handleInput} onKeyUp={getTotalCost} required fullWidth label="Visa Apply ID" placeholder='Enter your visa apply ID' variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField name='jobApplyID' onChange={handleInput} onKeyUp={getTotalCost} required fullWidth label="Job Apply ID" placeholder='Enter your job apply ID' variant="outlined" />
        </Grid>
        <Grid item xs={12} className="text-center">
          {loading? <CircularProgress /> :<div className='loan-amount'>Total Costs: ${totalCost !== ""? totalCost : 0.00}</div>}
        </Grid>
        <Grid item xs={12} className="text-end">

        <Button variant='contained' onClick={()=> setStart(true)}>Checkout</Button>
        </Grid>
        </Grid>
        </Paper>}
        </>
  )
}

export default Index