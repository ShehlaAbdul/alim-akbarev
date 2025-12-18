import React from 'react';
import "./Style.scss";
import AboutHero from '../../components/AboutHero/AboutHero';
import BreadCrumbBtn from '../../components/BreadCrumbBtn/BreadCrumbBtn';
import AboutActivity from '../../components/AboutActivity/AboutActivity';
import AboutExperience from '../../components/AboutExperience/AboutExperience';

function AboutPage() {
  return (
    <>
      <BreadCrumbBtn />
      <AboutHero />
      <AboutActivity />
      <AboutExperience />
    </> 
  );
}

export default AboutPage;
