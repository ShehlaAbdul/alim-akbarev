import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/LogoDark.webp";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/loc.svg";
import { FaAngleRight } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";

function Footer() {
  return (
    <footer>
      <div className="footer d-flex flex-column ">
        <div className="footer-top row">
          <div className="logo-side col-12 col-md-6">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <p>Ümumi Cərrahiyyə üzrə Uzman Həkim</p>
            <div className="icons d-flex gap-2">
              <div>
                {" "}
                <img src={Instagram} alt="" />
              </div>
              
              <div>
                <img src={Facebook} alt="" />
              </div>
              <div>
                <img src={Youtube} alt=""  />
              </div>
              <div>
                <img src={Linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="links col-12 col-lg-6 row">
            <ul className="col-12 col-md-6 d-flex flex-column">
              <h5>Sürətli keçid</h5>
              <li>
                <LuChevronRight size={20} />
                Ana Səhifə
              </li>
              <li>
                <LuChevronRight size={20} />
                Həkim haqqında
              </li>
              <li>
                <LuChevronRight size={20} />
                Prosedurlar
              </li>
              <li>
                <LuChevronRight size={20} />
                Qalereya
              </li>
              <li>
                <LuChevronRight size={20} />
                Əlaqə
              </li>
            </ul>
            <ul className="col-12 col-md-6 d-flex flex-column">
              <h5>Əlaqə</h5>
              <li>
                <div>
                  <img src={Location} alt="" />
                </div>
                Liv Bona Dea Hospital</li>
              <li>
                <div>
                  <img src={Mail} alt="" />
                </div>
                <span>info@alimakbarov.az</span>
              </li>
              <li>
                <div>
                  <img src={Phone} alt="" />
                </div>
                <span>+994505581113</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between justify-content-between align-items-start gap-3 g-0 mt-3">
          <p>© Bütün hüquqlar qorunur.</p>
          <p>
            Sayt hazırlandı:
            <Link> Birsayt.az</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
