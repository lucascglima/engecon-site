/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Corporate/Header2';
import Hero from '../../components/Corporate/Hero2';
import Services from '../../components/Corporate/Services';
import Team from '../../components/Corporate/Team';
import Testimonials from '../../components/Corporate/Testimonials';
import Brands from '../../components/Corporate/Brands';
import Blog from '../../components/Corporate/Blog';
import Footer from "../../components/Footers/CorporateFooter";

const AboutCorporate = () => {
  useEffect(() => {
    document.body.classList.add('index-corporate');

    const removeClasses = [
      'land-demo2', 'index-bus1',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - About Corporate</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header />
        <Hero />
        <Services />
        <Team /> 
        <Testimonials additionalClass="bg-gray section-padding pb-0 pt-0" />
        <Brands additionalClass="bg-gray section-padding pt-80" />
        <Blog />
        <Footer />
      </MainLightLayout>
    </>
  )
}

export default AboutCorporate;