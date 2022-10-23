import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const steps = ['Shipping address', 'Payment details', 'Summary'];




export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm handleNext = {handleNext}/>;
      case 1:
        return <PaymentForm handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <Review handleBack={handleBack} handleNext={handleNext} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div className='text-center'><ShoppingCartCheckoutIcon sx={{fontSize:'2rem', mb:2}} color='primary'/></div>
          <Typography component="h1" variant="h4" align="center" color="primary" >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              
            </React.Fragment>
          )}
        </Paper>
      
      </Container>
    
  );
}