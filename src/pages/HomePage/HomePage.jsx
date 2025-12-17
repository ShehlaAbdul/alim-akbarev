import React from 'react';
import "./Style.scss";
import HomeHero from '../../components/HomeHero/HomeHero.jsx';
import Oncology from '../../components/Oncology/Oncology.jsx';
import HomeVideos from '../../components/HomeVideos/HomeVideos.jsx';
import HomeInfo from '../../components/HomeInfo/HomeInfo.jsx';
import NoteSec from '../../components/NoteSection/NoteSec.jsx';
import HomeReview from '../../components/HomeReview/HomeReview.jsx';

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Oncology />
      <HomeInfo/>
      <HomeVideos />
      <HomeReview/>
      <NoteSec />
    </div>
  );
}

export default HomePage;
