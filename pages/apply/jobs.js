import React from "react";
import JobForm from "../../components/apply/jobs/JobForm";
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
      {auth.token ? (
        <>
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
        </>
      ) : (
        <div className="authContainer">
          <Auth />
        </div>
      )}
    </React.Fragment>
  );
};

export default Job;
