import { Box, Card, LinearProgress, Typography } from "@mui/material";
import React from "react";
import JobForm from "../../components/apply/jobs/JobForm";
import Image from "next/image";
import jobIcon from "../../public/images/demos/jobIcon.png";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Auth from "../../components/Auth";
import Head from "next/head";

const Job = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { state } = useContext(DataContext);
  const { auth } = state;
  return (
    <React.Fragment>
      <Head>
        <title>Apply for job</title>
      </Head>
      {/* <div className={auth.token ? "visa-page" : "authContainer"}>
        {auth.token ? (
          <>
            <div className="visa-page-header">
              <Image src={jobIcon} />
              <Typography align="center" style={{ fontSize: "1.4rem" }}>
                Job Application Form
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
                <JobForm
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
      </div> */}
      <div className="page_job_apply">
        <div className="form_job_apply">
           <h2>Job Application Form</h2>
           <JobForm
                  loading={loading}
                  setLoading={setLoading}
                  success={success}
                  setSuccess={setSuccess}
                />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job;
