import React, { useRef, useState } from "react";
import "./Style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowRight } from "react-icons/hi2";

function HomeReview() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="home-review">
      <div className="home-review row">
        <div className="col-12 col-lg-6 text-side">
          <div className="section-head-title">
            <p>Ümumi Cərrahiyyə üzrə Uzman Həkim</p>
          </div>
          <h2>Bizim haqqımızda nə deyirlər?</h2>
          <p className="p-text">
            Paiyentlərimizin bizim haqqımızda söylədikləri, göstərdiyimiz
            keyfiyyətli xidmətin və diqqətli yanaşmamızın ən gözəl sübutudur.
          </p>
        </div>
        <div className="col-12 col-lg-6 slider-side">
          <div className="slider-wrapper">
            <div className="slider-container">
              <button
                ref={prevRef}
                className="slider-arrow slider-arrow-prev"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <HiArrowRight />
              </button>

              <div className="slider-content">
                <Swiper
                  modules={[Navigation, Pagination]}
                  pagination={{ clickable: true }}
                  onSwiper={setSwiperInstance}
                  loop={true}
                  slidesPerView={1}
                  className="review-slider"
                >
                  <SwiperSlide>
                    <div className="review-card">
                      <p>
                        Həkim çox diqqətcil və peşəkardır. Müalicədən çox razı
                        qaldım.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="review-card">
                      <p>
                        Çox səmimi yanaşma və yüksək xidmət. Tövsiyə edirəm.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="review-card">
                      <p>
                        Diaqnoz çox dəqiq qoyuldu, hər şey aydın izah edildi.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <button
                ref={nextRef}
                className="slider-arrow slider-arrow-next"
                onClick={() => swiperInstance?.slideNext()}
              >
                <HiArrowRight />
              </button>
            </div>

            <div className="arrows-mobile">
              <button
                className="slider-arrow slider-arrow-prev"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <HiArrowRight />
              </button>
              <button
                className="slider-arrow slider-arrow-next"
                onClick={() => swiperInstance?.slideNext()}
              >
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeReview;
