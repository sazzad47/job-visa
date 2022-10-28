import React from "react";
import LoanForm from "../../components/apply/loan/LoanForm";
import { useState } from "react";
import Auth from "../../components/Auth";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Head from "next/head";

const Loan = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { state } = useContext(DataContext);
  const { auth } = state;
  return (
    <React.Fragment>
      <Head>
        <title>Apply for loan</title>
      </Head>
      {auth.token ? (
        <>
          <div className="page_loan_apply">
            <div className="form_loan_apply">
              <h2>Loan Application Form</h2>
              <LoanForm
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

export default Loan;
