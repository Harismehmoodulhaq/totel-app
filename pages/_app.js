import React from "react";
import Head from "next/head";
import "./global.css";
import NavBar from "../components/Navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Career App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
