import React from "react";
import VisaForm from "../../components/apply/visa/VisaForm";
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
      {auth.token ? (
        <>
          <div className="page_apply">
            <div className="form_apply">
              <h2>Visa Application Form</h2>
              <VisaForm
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

export default Visa;
