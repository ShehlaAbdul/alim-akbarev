import React from "react";
import "./Style.scss";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Logo from "../../assets/images/LogoLight.webp"
import MainBtn from "../../components/MainBtn/MainBtn";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav>
      <div className="header-top d-none d-md-block">
        <div className="container-fluid g-0 d-flex justify-content-between">
          <div className="left-side d-flex gap-3">
            <div className="phone d-flex ">
              <img src={Phone} alt="" />
              <span>+994505581113</span>
            </div>
            <div className="mail d-flex">
              <img src={Mail} alt="" />
              <span>info@alimakbarov.az</span>
            </div>
          </div>
          <div className="right-side d-flex gap-2">
            <div>
              <img src={Instagram} alt="" className="instagram" />
            </div>
            <div>
              <img src={Facebook} alt="" className="instagram" />
            </div>
            <div>
              <img src={Youtube} alt="" className="instagram" />
            </div>
            <div>
              <img src={Linkedin} alt="" className="instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom container-fluid d-flex justify-content-between align-items-center border">
        <div className="logo-side">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar d-none d-lg-block">
          <ul className="d-flex gap-3 g-0  m-0 p-0">
            <li>
              <Link>Ana Səhifə</Link>
            </li>
            <li>
              <Link to={"/about"}>Haqqımızda</Link>
            </li>
            <li>
              <Link>Əməliyyatlar</Link>
            </li>
            <li>
              <Link>Qalereya</Link>
            </li>
            <li>
              <Link>Tibbi məlumatlar</Link>
            </li>
            <li>
              <Link>Əlaqə</Link>
            </li>
          </ul>
        </div>
        <div className="btn-side d-flex gap-2 align-items-center">
          <div className="d-none d-lg-block">
            <MainBtn title={"Əlaqə"} />
          </div>
          <div className="d-block d-lg-none">
            {" "}
            <HiMiniBars3 />
          </div>
        </div>
      </div>
      <div className={`mobile-menu `}>
        <div className="menu-header">
          {/* <IoClose size={28} onClick={() => setMenuOpen(false)} /> */}
        </div>
        <ul>
          <li>Ana Səhifə</li>
          <li>Haqqımızda</li>
          <li>Əlaqə</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
