import {
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import FileUpload from "../../components/apply/visa/FileUpload";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fetchData";
import { useState } from "react";
import PaymentMessage from "../../components/payment/PaymentMessage";
import { imageUpload } from "../../utils/imageUpload";
import Head from "next/head";

const Bank = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  const { auth, paymentInfo } = state;
  const handleUpload = async () => {
    setLoading(true);
    let media;
    media = await imageUpload([paymentInfo.bankReceipt]);
    const res = await postData(
      "payment/bank",
      { ...paymentInfo, bankReceipt: media[0] },
      auth.token
    );
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    setLoading(false);
    setSuccess(true);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Pay with bank</title>
      </Head>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            sx={{ mb: 3 }}
            component="h1"
            variant="h4"
            align="center"
            color="primary"
          >
            Pay with bank
          </Typography>
          {success ? (
            <PaymentMessage />
          ) : (
            <>
              <Typography textAlign="center">
                Download this{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf"
                >
                  PDF{" "}
                </a>
                and upload it below attached with your bank receipt
              </Typography>
              <div className="text-center mt-4">
                <FileUpload
                  accept="application/pdf"
                  name="bankReceipt"
                  type="CHANGE_PAYMENT_INPUTS"
                />
              </div>
              <div className="text-center mt-4">
                <Button
                  style={{ minWidth: "5rem" }}
                  variant="contained"
                  onClick={handleUpload}
                >
                  {loading ? (
                    <div
                      style={{
                        fontSize: "12px",
                        color: "white",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Uploading...
                      <CircularProgress color="inherit" size="12px" />
                    </div>
                  ) : (
                    "Upload"
                  )}
                </Button>
              </div>
            </>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Bank;
