import React from 'react';
import "./Style.scss";
import Layout from "../../assets/images/DrPhoto.webp";
import MainBtn from '../MainBtn/MainBtn';
import File from "../../assets/icons/file.svg";

function AboutHero() {
  return (
    <section id="about-hero">
      <div className="about-hero row g-0 ">
        <div className="left-side col-12 col-xl-7  d-flex flex-column justify-content-center">
          <div className="section-head-title">
            <p>Ümumi Cərrahiyyə üzrə Uzman Həkim</p>
          </div>
          <h1 className="h1-text">Uzman Doktor Alim Əkbərov</h1>
          <p>
            Uzman Doktor Alim Əkbərov, Ümumi Cərrahiyyə sahəsində ixtisaslaşmış
            bir mütəxəssisdir. O, Akdeniz Universiteti və Azərbaycan Tibb
            Universitetində təhsil alıb və uzun müddət Türkiyədə və Azərbaycanda
            müxtəlif klinikalarda təcrübə qazanıb. Əkbərov, qalın bağırsaq, düz
            bağırsaq, qaraciyər, pankreas və digər daxili orqanların cərrahi
            xəstəlikləri üzrə mütəxəssisdir. Eyni zamanda, bir çox elmi məqalə
            və konfransların iştirakçısı olaraq, cərrahi sahədəki biliklərini
            daim inkişaf etdirir və tibb aləmində nüfuzlu mütəxəssisdir.
          </p>
        </div>
        <div className="right-side  col-12 col-xl-5">
          <img src={Layout} alt="" />
        </div>
      </div>
      <div className="edu">
        <h1>Təhsil</h1>
        <div className="edu-content row gap-4  gap-lg-0">
          <div className="edu-item col-12 col-lg-6">
            <div className="item-content">
              <div>
                <h4>Akdeniz Universiteti, Antalya, Türkiyə</h4>
                <span>2016-2021</span>
              </div>
              <div className="file">
                <img src={File} alt="" />
              </div>
            </div>
          </div>
          <div className="edu-item col-12 col-lg-6">
            <div className="item-content">
              <div>
                <h4>Akdeniz Universiteti, Antalya, Türkiyə</h4>
                <span>2016-2021</span>
              </div>
              <div className="file">
                <img src={File} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
