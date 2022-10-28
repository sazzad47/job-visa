import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ApplicantInfo from "./ApplicantInfo";
import PassportVisaInfo from "./PassportVisaInfo";
import JobInfo from "./JobInfo";
import ContactInfo from "./ContactInfo";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import Link from "next/link";

export default function JobForm({ loading, setLoading, success, setSuccess }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: "Job information",
      form: <JobInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Provide your information",
      form: <ApplicantInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Passport-Visa details",
      form: (
        <PassportVisaInfo handleNext={handleNext} handleBack={handleBack} />
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
            <Box sx={{ width: "100%", mt: 3, color:'#000' }}>
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
