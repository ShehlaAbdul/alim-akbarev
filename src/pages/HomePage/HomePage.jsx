import React from 'react';
import "./Style.scss";
import HomeHero from '../../components/HomeHero/HomeHero.jsx';
import Oncology from '../../components/Oncology/Oncology.jsx';

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Oncology/>
    </div>
  );
}

export default HomePage;
