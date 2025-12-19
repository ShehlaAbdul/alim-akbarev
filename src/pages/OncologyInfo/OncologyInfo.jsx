import React from "react";
import "./Style.scss";
import BreadCrumbBtn from "../../components/BreadCrumbBtn/BreadCrumbBtn";
import { Link, useNavigate, useParams } from "react-router-dom";
import Img from "../../assets/images/infoImg.webp";
import Arrow from "../../assets/icons/arrow.svg";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

function OncologyInfo() {
  const oncology = [
    {
      id: 1,
      title: "Əməliyyat öncəsi diaqnostika",
      img: Img,
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
    {
      id: 2,
      title: "Əməliyyat öncəsi diaqnostika",
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
    {
      id: 3,
      title: "Əməliyyat öncəsi diaqnostika",
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
    {
      id: 4,
      title: "Neoadjuvan kimyaterapiya",
      shortDesc:
        "Əməliyyatdan əvvəl xərçəng hüceyrələrinin kiçildilməsi və müalicənin təsirini artırmaq məqsədilə kimyəvi müalicə tətbiq olunur.",
      longDesc:
        "Əməliyyatdan əvvəl xərçəng hüceyrələrinin kiçildilməsi və müalicənin təsirini artırmaq məqsədilə kimyəvi müalicə tətbiq olunur.Əməliyyatdan əvvəl xərçəng hüceyrələrinin kiçildilməsi və müalicənin təsirini artırmaq məqsədilə kimyəvi müalicə tətbiq olunur.",
    },
  ];
  const navigate = useNavigate();
  const { id } = useParams();

  const detail = oncology.find((item) => item.id === Number(id));

  if (!detail) return <p>Məlumat tapılmadı</p>;

  return (
    <>
      <BreadCrumbBtn />
      <section id="oncology-info">
        <div className="oncology-info">
          <div className="img">
            <img src={Img} alt="" />
          </div>
          <div className="text">
            <h1>{detail.title}</h1>
            <p className="detail">{detail.longDesc} </p>
          </div>
              </div>
       
          <div className="other-cards">
                  <h1>Digər Məlumatlar</h1>
                   <Swiper
          modules={[ Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2, // tablet & desktop → 2 kart
            },
          }}
                  >
                    <div className="row">
              {oncology
                .filter((item) => item.id !== detail.id)
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link
                      to={`/oncology-info/${item.id}`}
                      className="col-12 col-lg-6"
                    >
                      <div className="detail-card d-flex">
                        <div className="text-side">
                          <h4>{item.title}</h4>
                          <p>{item.shortDesc}</p>
                        </div>
                        <div className="arrow">
                          <img src={Arrow} alt="" />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </div>    
        </Swiper>
          
          </div>
      </section>
    </>
  );
}

export default OncologyInfo;
