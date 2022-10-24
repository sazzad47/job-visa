import { Container, Grid } from "@mui/material";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { getData } from "../utils/fetchData";
import Parser from "html-react-parser";
import Head from "next/head";

const Services = ({ data }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{Parser(data.title)}</title>
        <meta name="description" content={Parser(data.shortDescription)} />
      </Head>
      <Breadcrumb title="Services" />
      <Container sx={{ minHeight: "100vh" }}>
        <Grid>{Parser(data.body)}</Grid>
      </Container>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const res = await getData(`services?index=1`);

  return {
    props: {
      data: res.data,
    },
  };
}

export default Services;
