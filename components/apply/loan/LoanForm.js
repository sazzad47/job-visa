
import * as React from 'react';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import LoanInfo from './LoanInfo';
import ApplicantInfo from './ApplicantInfo';
import FatherInfo from './FatherInfo';
import MotherInfo from './MotherInfo';
import LandDocument from './LandDocument';
import BankDetails from './BankDetails';
import Communication from './Communication';



export default function LoanForm() {

  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: 'Loan Information',
      form: <LoanInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Information of the Applicant',
      form:
        <ApplicantInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Father of the Applicant',
      form: <FatherInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Mother of the Applicant',
      form: <MotherInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Land Document',
      form: <LandDocument handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Bank Details',
      form: <BankDetails handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: 'Communication Medium',
      form: <Communication handleNext={handleNext} handleBack={handleBack} />,
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
          justifyContent: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography className='visa-page-form-title'>{steps[activeStep].label}</Typography>
      </Paper>
      <div className='d-flex align-items-center justify-content-center mb-2'>

      <MobileStepper
        
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        />
      </div>
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

