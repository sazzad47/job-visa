import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonalInfo from "./PersonalInfo";
import PassportDetails from "./PassportDetails";
import VisaProcessingInfo from "./VisaProcessingInfo";
import HomeInfo from "./HomeInfo";
import BankStatement from "./BankStatement";
import MedicalReport from "./MedicalReport";
import ContactInfo from "./ContactInfo";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

export default function VisaForm({ loading, setLoading, success, setSuccess }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: "Personal Information",
      form: <PersonalInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Passport Details",
      form: <PassportDetails handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Visa Processing Information",
      form: (
        <VisaProcessingInfo handleNext={handleNext} handleBack={handleBack} />
      ),
    },
    {
      label: "Contact Information",
      form: (
        <ContactInfo
          setLoading={setLoading}
          setSuccess={setSuccess}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      ),
    },
  ];

  const maxSteps = steps.length;
  return (
    <>
       {success ? (
        <Box sx={{ maxWidth: 450, mt:5, display:'block', mx:'auto'}}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Box sx={{ m: 1 }}>
              <CheckCircleIcon color="primary" />
            </Box>
            <Typography className="visa-page-form-title">
              Uploaded successfully!
            </Typography>
          </Paper>
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Box sx={{ width: "100%", mt: 3, color:'#fff' }}>
              <Typography align="center">
                Go to your dashboard to check your information.
              </Typography>
            </Box>
          </div>
          <Box
            sx={{
              maxWidth: 450,
              minWidth: { xs: 300, sm: 450 },
              width: "100%",
              p: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/dashboard">
              <Button variant="contained">dashboard</Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
        <div className="form_stepper">
        <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
              />
        </div>
      <div className="form_title">{steps[activeStep].label}</div>
      {steps[activeStep].form}
      </>
      )}
    </>
  );
}
