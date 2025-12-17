import React, { useEffect, useState } from "react";
import "./Style.scss";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";   

function AboutActivity() {
  const activities = [
    {
      id: 1,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
    },
    {
      id: 2,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
    },
    {
      id: 3,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
    },
    {
      id: 4,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
      },
    {
      id: 5,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
      },
    {
      id: 6,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
      },
    {
      id: 7,
      title: "Qalın bağırsaq (Kolon) cərrahi xəstəlikləri",
      desc: "Kolon Kanseri - Bədxassəli şiş, Poliplər, Divertikulit, Ülseratif Kolit, Crohn",
      },
    ];

    const [activeId, setActiveId] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    const toggleCard = (id) => {
      setActiveId(activeId === id ? null : id); // eyni karta klik → bağla
    };
// slider responsive
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <section id="about-activity">
      <div className="about-activity">
        <h1>Fəaliyyət istiqamətləri</h1>
          <div className="activity-content row">
        {isMobile ? (
          <Swiper spaceBetween={20} slidesPerView={1} modules={[Navigation, Pagination]} pagination={{ clickable: true }}>
            {activities.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`activity-item ${
                    activeId === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleCard(item.id)}
                >
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
            <>
            {activities.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div
                  className={`activity-item ${
                    activeId === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleCard(item.id)}
                >
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            ))}
            </>
        )}
          </div>
      </div>
    </section>
  );
}

export default AboutActivity;
