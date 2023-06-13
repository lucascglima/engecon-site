/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import PreviewLayout from '../../layouts/preview';
//= Components
import Header from '../../components/Landing-Preview/Header';
import Feet from '../../components/Landing-Preview/Feet';
import Demos from '../../components/Landing-Preview/Demos';
import Counter from '../../components/Landing-Preview/Counter';
import Portfolio from '../../components/Landing-Preview/Portfolio';
import Info from '../../components/Landing-Preview/Info';
import BestFeatures from '../../components/Landing-Preview/BestFeatures';
import Responsive from '../../components/Landing-Preview/Responsive';
import AllFeatures from '../../components/Landing-Preview/AllFeatures';
import Testimonials from '../../components/Landing-Preview/Testimonials';
import CallToAction from '../../components/Landing-Preview/CallAction';

const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add('index-main');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Landing Preview</title>
      </Head>

      <PreviewLayout>
        <Header />
        <Feet />
        <Demos />
        <Counter />
        <Portfolio />
        <Info />
        <BestFeatures />
        <Responsive />
        <AllFeatures />
        <Testimonials />
        <CallToAction />
      </PreviewLayout>
    </>
  )
}

export default LandingPreview;