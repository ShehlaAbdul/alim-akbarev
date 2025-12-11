import React from 'react';
import "./Style.scss";
import HomeHero from '../../components/HomeHero/HomeHero.jsx';
import Oncology from '../../components/Oncology/Oncology.jsx';
import HomeVideos from '../../components/HomeVideos/HomeVideos.jsx';

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Oncology />
      <HomeVideos/>
    </div>
  );
}

export default HomePage;
