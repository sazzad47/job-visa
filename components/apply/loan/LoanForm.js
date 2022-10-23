import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import LoanInfo from "./LoanInfo";
import ApplicantInfo from "./ApplicantInfo";
import FatherInfo from "./FatherInfo";
import MotherInfo from "./MotherInfo";
import LandDocument from "./LandDocument";
import BankDetails from "./BankDetails";
import Communication from "./Communication";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import Link from "next/link";

export default function LoanForm({ loading, setLoading, success, setSuccess }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState("");
  const [loan, setLoan] = React.useState("");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: "Loan Information",
      form: (
        <LoanInfo
          totalCost={totalCost}
          setTotalCost={setTotalCost}
          setLoan={setLoan}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: "Information of the Applicant",
      form: <ApplicantInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Father of the Applicant",
      form: <FatherInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Mother of the Applicant",
      form: <MotherInfo handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Land Document",
      form: <LandDocument handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Bank Details",
      form: <BankDetails handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      label: "Communication Medium",
      form: (
        <Communication
          totalCost={totalCost}
          loan={loan}
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
        <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
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
            <Box sx={{ width: "100%", mt: 3 }}>
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
        <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
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
            {loading ? (
              <Typography className="checking-effect visa-page-form-title">
                Uploading...
              </Typography>
            ) : (
              <Typography className="visa-page-form-title">
                {steps[activeStep].label}
              </Typography>
            )}
          </Paper>
          <div className="d-flex align-items-center justify-content-center mb-2">
            {loading ? (
              <Box sx={{ width: "100%", mt: 3 }}>
                <Typography align="center">
                  Please wait, it may take some time depending on your internet
                  speed.
                </Typography>
              </Box>
            ) : (
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
              />
            )}
          </div>
          {loading ? null : (
            <Box
              sx={{
                maxWidth: 450,
                minWidth: { xs: 300, sm: 450 },
                width: "100%",
                p: 2,
              }}
            >
              {steps[activeStep].form}
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
