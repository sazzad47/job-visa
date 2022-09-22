
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



export default function VisaForm() {

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
      form: <ContactInfo handleNext={handleNext} handleBack={handleBack} />,
    },
     
  ];
  
  const maxSteps = steps.length;
  return (
    <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography style={{fontWeight:'bold'}}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2 }}>
        {steps[activeStep].form}
      </Box>
      {/* <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            variant='contained'
            size="small"
            onClick={handleNext}
           
            
          >
            {activeStep === maxSteps - 1? 'Submit': 'Next' }
           
          </Button>
        }
        backButton={
          <Button size="small" variant='contained' onClick={handleBack} disabled={activeStep === 0}>
            
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

