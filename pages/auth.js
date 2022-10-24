import Head from "next/head";
import React from "react";
import Auth from "../components/Auth";

const AuthPage = () => {
  return (
    <div className="authContainer">
      <Head>
        <title>Authentication</title>
      </Head>
      <Auth />
    </div>
  );
};

export default AuthPage;
