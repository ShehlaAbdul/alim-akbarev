import React from 'react';
import "./Style.scss";
import AboutHero from '../../components/AboutHero/AboutHero';
import BreadCrumbBtn from '../../components/BreadCrumbBtn/BreadCrumbBtn';

function AboutPage() {
  return (
    <>
      <BreadCrumbBtn />
      <AboutHero />
    </>
  );
}

export default AboutPage;
