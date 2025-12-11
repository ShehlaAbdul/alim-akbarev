import React from "react";
import "./Style.scss";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Video from "../../assets/images/video.webp";

function HomeVideos() {
  return (
    <section id="home-videos">
      <div className="home-videos">
        <div className="videos-head d-flex align-items-center justify-content-between py-1">
          <h3>Videolar</h3>
          <div className="videw-all">
            <span>
              <Link to="#">Hamısına bax</Link>
              {/* Linkə real bir 'to' dəyəri əlavə etmək tövsiyə olunur */}
            </span>
            <FaAngleRight />
          </div>
        </div>

        <div className="videos-content row">
          <div className="col-12 col-xl-6 mb-4">
            <div className="videos-card d-flex flex-column flex-md-row align-items-md-center">
              <div className="video col-12 col-md-6">
                <img
                  src={Video}
                  alt="Video Thumbnail 1"
                  className="img-fluid"
                />
              </div>

              <div className="text col-12 col-md-6 ">
                <span>1 may 2024 cü il </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nisl amet proin
                  malesuada pellentesque viverra at et.
                </p>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block  col-xl-6 mb-4">
            <div className="videos-card d-flex flex-column flex-md-row align-items-md-center">
              <div className="video col-12 col-md-6">
                <img
                  src={Video}
                  alt="Video Thumbnail 2"
                />
              </div>

              <div className="text col-12 col-md-6 ">
                <span>1 may 2024 cü il </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nisl amet proin
                  malesuada pellentesque viverra at et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeVideos;
