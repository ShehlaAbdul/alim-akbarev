import React from "react";
import { Link } from "react-router-dom";
import InfoImg from "../../assets/images/infoImg.webp";
import { FaAngleRight } from "react-icons/fa6";
import "./Style.scss"; // SCSS stillərini import etdiyinizə əmin olun

function HomeInfo() {
  const cardData = [
    {
      id: 1,
      title: "Birinci Kart Başlığı",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris aliquet sem consequat facilisis nulla laoreet mollis quam amet.",
      image: InfoImg,
      link: "/card-1",
    },
    {
      id: 2,
      title: "İkinci Kart Başlığı",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris aliquet sem consequat facilisis nulla laoreet mollis quam amet.",
      image: InfoImg,
      link: "/card-2",
    },
    {
      id: 3,
      title: "Üçüncü Kart Başlığı",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris aliquet sem consequat facilisis nulla laoreet mollis quam amet.",
      image: InfoImg,
      link: "/card-3",
    },
    {
      id: 4,
      title: "Dördüncü Kart Başlığı",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris aliquet sem consequat facilisis nulla laoreet mollis quam amet.",
      image: InfoImg,
      link: "/card-4",
    },
    // Əlavə kartlar üçün nümunə (cəmi 8 kart olduğunu fərz edək)
    {
      id: 5,
      title: "Beşinci Kart Başlığı",
      description: "Qısa mətn nümunəsi.",
      image: InfoImg,
      link: "/card-5",
    },
    {
      id: 6,
      title: "Altıncı Kart Başlığı",
      description: "Qısa mətn nümunəsi.",
      image: InfoImg,
      link: "/card-6",
    },
    {
      id: 7,
      title: "Yeddinci Kart Başlığı",
      description: "Qısa mətn nümunəsi.",
      image: InfoImg,
      link: "/card-7",
    },
    {
      id: 8,
      title: "Səkkizinci Kart Başlığı",
      description: "Qısa mətn nümunəsi.",
      image: InfoImg,
      link: "/card-8",
    },
  ];

  return (
    <section id="home-info">
      {/* 80px yan padding SCSS-də home-info div-inə veriləcək */}
      <div className="home-info">
        {/* Başlıq Hissəsi */}
        <div className="sec-head d-flex align-items-center justify-content-between py-1">
          <h3>Məlumatlar</h3>
          <div className="videw-all">
            <span>
              <Link to="#">Hamısına bax</Link>
            </span>
            <FaAngleRight />
          </div>
        </div>

        {/* Kartlar Hissəsi */}
        {/* 'g-card-space' sinfi xüsusi 40px məsafə üçün SCSS-də istifadə olunur */}
        <div className="row g-card-space my-3 mx-0">
          {cardData.map((card) => (
            <div
             
              className="col-12  col-md-8 col-lg-6 col-xl-4 d-flex"
            >
              <Link
                to={card.link}
                className="card-link w-100 text-decoration-none"
              >
                <div className="custom-card shadow-sm h-100">
                  {/* Yuxarı Hissə: Şəkil */}
                  <div className="card-img-top">
                    <img
                      src={card.image}
                      className="img-fluid w-100"
                      alt={card.title}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Aşağı Hissə: Mətn */}
                  <div className="card-body p-3">
                    <h5 className="card-title text-dark">{card.title}</h5>
                    <p className="card-text mb-0">{card.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
