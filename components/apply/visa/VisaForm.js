
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PersonalInfo from './PersonalInfo';
import PassportDetails from './PassportDetails';
import VisaProcessingInfo from './VisaProcessingInfo';
import HomeInfo from './HomeInfo';
import BankStatement from './BankStatement';
import MedicalReport from './MedicalReport';
import ContactInfo from './ContactInfo';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function VisaForm({loading, setLoading, success, setSuccess}) {

  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: 'Personal Information',
      form: <PersonalInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Passport Details',
      form:
        <PassportDetails handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Visa Processing Information',
      form: <VisaProcessingInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Home Information',
      form: <HomeInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Bank Statement',
      form: <BankStatement handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Medical Report',
      form: <MedicalReport handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Contact Information',
      form: <ContactInfo setLoading={setLoading} setSuccess={setSuccess} handleNext={handleNext} handleBack={handleBack} />,
    },
     
  ];
 
  const maxSteps = steps.length;
  return (
    <>
    {success?
      
      <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >  
        <Box sx={{m:1}}><CheckCircleIcon color='primary' /></Box>
        <Typography className='visa-page-form-title'>Uploaded successfully!</Typography>
        
        
      </Paper>
      <div className='d-flex align-items-center justify-content-center mb-2'>

    
      <Box sx={{ width: '100%', mt: 3 }}>
       <Typography align='center'>Go to your dashboard to check your information.</Typography>
      </Box>
      </div>
      <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2, display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained'>dashboard</Button>
      </Box>
      
      
    </Box> :

      <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {loading? <Typography className='checking-effect visa-page-form-title'>Uploading...</Typography>
        :<Typography className='visa-page-form-title'>{steps[activeStep].label}</Typography>}
        
      </Paper>
      <div className='d-flex align-items-center justify-content-center mb-2'>

      {loading? 
      <Box sx={{ width: '100%', mt: 3 }}>
       <Typography align='center'>Please wait, it may take some time depending on your internet speed.</Typography>
      </Box>:
      <MobileStepper
        
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        />}
      </div>
      {loading? null : <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2 }}>
        {steps[activeStep].form}
      </Box>}
      
      
    </Box>
  }
  </>
  );
}

