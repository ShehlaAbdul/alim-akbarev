import React from "react";
import "./Style.scss";
// import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function AboutExperience() {
  const experience = [
    {
      id: 1,
      title:
        "Liv Bonadea international hospital həkim - Ümumi Cərrahiyyə mütəxəssisi",
      date: "2024 - davam edir",
    },
    {
      id: 1,
      title:
        "Liv Bonadea international hospital həkim - Ümumi Cərrahiyyə mütəxəssisi",
      date: "2024 - davam edir",
    },
    {
      id: 1,
      title:
        "Liv Bonadea international hospital həkim - Ümumi Cərrahiyyə mütəxəssisi",
      date: "2024 - davam edir",
    },
    {
      id: 1,
      title:
        "Liv Bonadea international hospital həkim - Ümumi Cərrahiyyə mütəxəssisi",
      date: "2024 - davam edir",
    },
    {
      id: 1,
      title:
        "Liv Bonadea international hospital həkim - Ümumi Cərrahiyyə mütəxəssisi",
      date: "2024 - davam edir",
    },
  ];

  return (
    <section id="about-experience">
      <div className="about-experience">
        <h1>Təcrübə</h1>
        <div className="experience-content row ">
          <Swiper
            spaceBetween={20}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1, // mobile
              },
              768: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
          >
            {experience.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="col-12 ">
                  <div className="experience-item">
                    <p className="title">{item.title}</p>
                    <span className="date">{item.date}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="about-articles">
        <h1>Məqalələr</h1>
        <div className="articles-content  ">
          <ul className="m-0 p-0 ">
            <li>
              Uzmanlıq tezisi(Elmi iş): Graves hastalığının kalıcı tedavisinde
              tiroidektomi ve RAİ tedavisinin klinik sonuçlarının
              değerlendirilmesi
            </li>
            <li>
              Association between Tumor Size and Malignancy Risk in Hormonally
              Inactive Adrenal Incidentalomas (Cureus)
            </li>
            <li>
              Laparaskopik inguinal herni onarımı sonrası gerilemeyen kasık
              ağrısı: 129 hastalık seri (Turkish Journal of Surgery)
            </li>
            <li>
              Duodenal Divertikul perforasyonu:Cerrahi tedavi ve literatur
              taraması (Ulusal Cerrahi kongresi 2022)
            </li>
            <li>
              Effect of Bariatric Surgery on Renal Function (5.National and 3
              Mediterrean Bariatrik-Metabolik cerrahi kongre)
            </li>
            <li>
              Laparoskopik Epifrenik özofagus divertikülü ekzisyonu (2022 Ulusal
              Cerrahi Kongresi video-sunum)
            </li>
          </ul>
        </div>
      </div>
      <div className="about-confrence">
        <h1>Konfranslar</h1>
        <div className="confrence-content  ">
          <ul className="m-0 p-0 ">
            <li>
              5. National and 3. Mediterranean Bariatric–Metabolic Surgery
              Congress
            </li>
            <li>9. Ulusal Endokrin Cerrahisi Kongresi</li>
            <li>
              Temel Biostatistik Kursu <em>(Türk Cerrahi Derneği)</em>
            </li>
            <li>
              1. Regional Elmi Praktik Konfrans (Spiker)
            </li>
            <li>
              2. Regional Elmi Praktik Konfrans (Spiker)
            </li>
            <li>16. Türk Hepatopankreatobilier Cerrahi Kongresi</li>
          </ul>
        </div>
      </div>
      <div className="assosiation-members">
        <h1>Dərnək üzvlükləri</h1>
        <div className="members-content  ">
          <ul className="m-0 p-0 ">
            <li>Türk cərrahi dərnəyi </li>
            <li>Türk Kolon ve Rektum cerrahisi derneği</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutExperience;
