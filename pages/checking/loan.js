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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { getData } from "../../utils/fetchData";

const LoanChecking = () => {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [idNumber, setIdNumber] = useState("");
  const [laonAppID, setLaonAppID] = useState("");
  const [data, setData] = useState({});
 
  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await getData(
      `loanChecking?index=${laonAppID}&idNumber=${idNumber}`
    );
    setData(res.applicant);
    setLoading(false);
    setShowData(true);
  };
  return (
    <React.Fragment>
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
            <AttachMoneyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Check Loan Status
          </Typography>
          <Box component="form" onSubmit={handleCheck} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="idNumber"
              label="ID Card Number"
              name="idNumber"
              type="number"
              autoFocus
              onChange={(e) => setIdNumber(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="laonAppID"
              label="Loan Application ID"
              type="number"
              id="laonAppID"
              onChange={(e) => setLaonAppID(e.target.value)}
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
                    Loan Application No {data?.index}
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      ID Number:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.idNumber}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Laon Amount:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.loanAmount}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Amount of Money:
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {data?.amountOfMoney}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Status:
                    </Grid>
                    <Grid item xs={12} md={6} style={{ color: "yellowgreen" }}>
                      {data?.status}
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

export default LoanChecking;
