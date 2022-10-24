import { Box, Card, LinearProgress, Typography } from "@mui/material";
import React from "react";
import VisaForm from "../../components/apply/visa/VisaForm";
import Image from "next/image";
import visaIcon from "../../public/images/demos/visaIcon.png";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Auth from "../../components/Auth";
import Head from "next/head";

const Visa = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { state } = useContext(DataContext);
  const { auth } = state;

  return (
    <React.Fragment>
      <Head>
        <title>Apply for visa</title>
      </Head>
      <div className={auth.token ? "visa-page" : "authContainer"}>
        {auth.token ? (
          <>
            <div className="visa-page-header">
              <Image src={visaIcon} />
              <Typography align="center" style={{ fontSize: "1.4rem" }}>
                Visa Application Form
              </Typography>
            </div>

            <Card
              className={loading ? "form-no-border" : "visa-page-form"}
              elevation={2}
            >
              {loading ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              ) : null}
              <div className="p-4">
                <VisaForm
                  loading={loading}
                  setLoading={setLoading}
                  success={success}
                  setSuccess={setSuccess}
                />
              </div>
            </Card>
          </>
        ) : (
          <Auth />
        )}
      </div>
    </React.Fragment>
  );
};

export default Visa;
