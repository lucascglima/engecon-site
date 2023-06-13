/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLightLayout from "../../layouts/main-light";
//= Components
import Header from "../../components/Main/Header1";
import IntroUp from "../../components/Main/IntroUp";
import Services from "../../components/Main/Services1";
import Portfolio2 from "../../components/Main/Portfolio2";
import Numbers from "../../components/Main/Numbers";
import Team from "../../components/Main/Team";
import CallToAction from "../../components/Main/CallAction";
import Footer from "../../components/Footers/MainFooter";
import Hero from "../../components/Architecture/Hero";
import Contact from "../../components/Creative/Contact";

const HomeMain = () => {
  useEffect(() => {
    document.body.classList.add("index-main");

    const removeClasses = [
      "index-bus1",
      "index-corporate",
      "index-restaurant",
      "index-arch",
      "index-freelancer",
      "cr-agency",
      "land-demo2",
      "mobile-app",
      "gr-orange-bg",
      "nft-market",
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Engecon</title>
      </Head>

      <MainLightLayout>
        {/* <StickyBar /> */}
        {/* <FixedSearch /> */}
        <Header />
        <IntroUp />
        {/* <IntroOutBox />  */}
        <Services />
        <Portfolio2 />
        {/* <Section /> */}
        {/* <Process /> */}
        {/* <Testimonials /> */}
        <Numbers />
        <CallToAction />
        <Hero />
        <Team />
        {/* <Blog /> */}
        <Contact />
        <Footer footerClass="main-footer bg-dark-blue" />
      </MainLightLayout>
    </>
  );
};

export default HomeMain;
