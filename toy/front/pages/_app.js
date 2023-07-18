import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Groomer = ({ Component }) => {
  return (
    <>
      <Head>
        <meat charSet="utf-8" />
        <title>Groomer</title>
      </Head>
      <Component />
    </>
  );
};

Groomer.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Groomer;
