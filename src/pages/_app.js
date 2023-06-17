/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import ProgressScroll from "../components/Progress-Scroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Engegon Recife</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin
        ></link>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin
      ></Script>
      <Component {...pageProps} />
      <ProgressScroll />
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/main.js"></Script>

      {/* <Script
        strategy="beforeInteractive"
        src="/js/bootstrap.bundle.min.js"
      ></Script> */}
      {/* <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script> */}
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      {/* <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script> */}
    </>
  );
}

export default MyApp;
