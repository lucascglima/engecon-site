/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLightLayout from "../../layouts/main-light";
//= Components
import Header from "../../components/Business/Header2/rec";

import Features from "../../components/Business/Features/structural-recovery";
import Process from "../../components/Business/Process/structural-recovery";
import Process2 from "../../components/Main/Process2";
import Portfolio2 from "../../components/Main/Portfolio2/structural-recovery";
import StickyBar from "../../components/Common/StickyBar";
import Footer from "../../components/Footers/MainFooter";
import Contact from "../../components/Creative/Contact";

const ServicesBusiness = () => {
  useEffect(() => {
    document.body.classList.add("index-bus1");

    const removeClasses = [
      "land-demo2",
      "index-corporate",
      "index-restaurant",
      "index-arch",
      "index-freelancer",
      "cr-agency",
      "index-main",
      "mobile-app",
      "gr-orange-bg",
      "nft-market",
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title> Engegon - Reforço estrutural</title>
      </Head>

      <MainLightLayout>
        <Header bg="img/engecon/estrutural/ref/ref-3.webp" />
        <main className="">
          <StickyBar />
          <Features services={true} />
          <Portfolio2 />
          <Process />
          <Process2 />
          <Contact />
          <Footer
            footerClass="main-footer bg-dark-blue bg-img"
            business={true}
          />
        </main>
      </MainLightLayout>
    </>
  );
};

export default ServicesBusiness;
