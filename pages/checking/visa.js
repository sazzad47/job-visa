import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { getData } from "../../utils/fetchData";
import Head from "next/head";

const VisaChecking = () => {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [passportNum, setPassportNum] = useState("");
  const [visaAppID, setVisaAppID] = useState("");
  const [data, setData] = useState({});

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await getData(
      `visaChecking?index=${visaAppID}&passportNumber=${passportNum}`
    );
    setData(res.applicant);
    setLoading(false);
    setShowData(true);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Visa Checking</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <Card
          elevation={4}
          sx={{
            marginTop: 8,
            marginBottom: 20,
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!data && (
            <Box
              style={{
                backgroundColor: "#4331ad",
                color: "#d4d1e8",
                marginBottom: "1rem",
              }}
            >
              <Typography style={{ padding: "1rem", fontSize: "1rem" }}>
                Invalid passport number or Visa Application ID!
              </Typography>
            </Box>
          )}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AirplaneTicketIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Check Visa Status
          </Typography>
          <Box component="form" onSubmit={handleCheck} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="passportNumber"
              label="Passport Number"
              name="passportNumber"
              type="text"
              autoFocus
              onChange={(e) => setPassportNum(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="VisaApplicationID"
              label="Visa Application ID"
              type="text"
              id="VisaApplicationID"
              autoComplete="VisaApplicationID"
              onChange={(e) => setVisaAppID(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? (
                <Grid className="checking-effect">Checking...</Grid>
              ) : (
                "Submit"
              )}
            </Button>
            {showData ? (
              data ? (
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{ fontWeight: "bold", margin: "2rem 0" }}
                    align="center"
                  >
                    Visa Application No {data?._id}
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      First Name:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.firstName}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Surname:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.surname}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Passport Number:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.passportNumber}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Date of Birth:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.dateOfBirth}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Status:
                    </Grid>
                    <Grid item xs={12} md={6} style={{ color: "yellowgreen" }}>
                      {data?.status}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Visa:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.uploadedVisa === false ? (
                        "Not uploaded yet"
                      ) : (
                        <a href={`${data?.visa}`}>Visa</a>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              ) : null
            ) : null}
          </Box>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default VisaChecking;
