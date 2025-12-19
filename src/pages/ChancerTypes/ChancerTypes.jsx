import React, { useEffect, useState } from "react";
import "./Style.scss";
import BreadCrumbBtn from "../../components/BreadCrumbBtn/BreadCrumbBtn";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function ChancerTypes() {
  const chancerTypes = [
    { id: 1, name: "Mədə Xərçəngi" },
    { id: 2, name: "Qida Borusu Xərçəngi" },
    { id: 3, name: "Qaraciyər Xərçəngi" },
    { id: 4, name: "Öd Yolları Xərçəngi" },
    { id: 5, name: "Mədəaltı Vəzi Xərçəngi" },
    { id: 6, name: "Yoğun Bağırsağ Xərçəngi" },
    { id: 7, name: "Düz Bağırsaq Xərçəngi" },
    { id: 8, name: "Süd Vəzi Xərçəngi" },
    { id: 9, name: "Trioid (Zob) Xərçəngi" },
    { id: 10, name: "Böyrəküstü Vəz Xərçəngi" },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BreadCrumbBtn />
      <section id="chancer-types">
        <div className="chancer-types">
          <h2 className="title">Xərçəng növləri</h2>
          <div className="chancer-container ">
            {isMobile ? (
              <Swiper
                // spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
              >
                {chancerTypes.map((card) => (
                  <SwiperSlide key={card.id} className="slide">
                    <Link to={`/cancer-detail/${card.id}`}>
                      <div className="chancer-card">
                        <p>{card.name}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              chancerTypes.map((card) => (
                <div className="chancer-card" key={card.id}>
                  <Link to={`/cancer-detail/${card.id}`}>
                      <p>{card.name}</p>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ChancerTypes;
