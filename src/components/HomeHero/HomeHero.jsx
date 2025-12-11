import React from 'react';
import Layout from "../../assets/images/DrPhoto.webp"; 
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg"
import "./Style.scss"
import MainBtn from '../MainBtn/MainBtn';

function HomeHero() {
  return (
    <section id="home-hero">
      <div className="home-hero row g-0 ">
        <div className="left-side col-12 col-xl-7  d-flex flex-column justify-content-center">
          <div className="section-head-title">
            <p>Ümumi Cərrahiyyə üzrə Uzman Həkim</p>
          </div>
          <h1 className='h1-text'>Op. Dr. Alim Əkbərov</h1>
          <p>
            Op. Dr. Alim Əkbərov ümumi cərrahiyyə sahəsində geniş təcrübəyə
            malik bir mütəxəssisdir. Peşəkar fəaliyyətində dəqiqlik və müasir
            texnologiyaların tətbiqi ilə xəstələrə yüksək keyfiyyətli tibbi
            xidmət göstərməyi əsas götürür.
          </p>
          <div>
            <MainBtn title={"Daha  ətraflı"} />
          </div>

          <div className="contact-side d-flex ">
            <div className="mail d-flex">
              <div className="box">
                <img src={Mail} alt="" />
              </div>
              <div className="text-side">
                <p>E-mail ünvanı</p>
                <span>info@alimakbarov.az</span>
              </div>
            </div>

            <div className="mail d-flex">
              <div className="box">
                <img src={Phone} alt="" />
              </div>
              <div className="text-side">
                <p>E-mail ünvanı</p>
                <span>info@alimakbarov.az</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side  col-12 col-xl-5">
          <img src={Layout} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
