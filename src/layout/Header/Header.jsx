import React, { useEffect, useState } from "react";
import "./Style.scss";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Logo from "../../assets/images/LogoLight.webp";
import MainBtn from "../../components/MainBtn/MainBtn";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Header() {
  const pathname = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar d-none d-xl-block">
          <ul className="d-flex gap-3 g-0  m-0 p-0">
            <li>
              <Link to={"/"}>Ana Səhifə</Link>
            </li>
            <li>
              <Link to={"/about"}>Haqqımızda</Link>
            </li>
            <li>
              <Link to={"/cancer-types"}>Xərçəng növləri</Link>
            </li>
            <li>
              <Link>Əməliyyatlar</Link>
            </li>

            <li>
              <Link>Qalereya</Link>
            </li>
            <li>
              <Link to={"/medical-info"}>Tibbi məlumatlar</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Əlaqə</Link>
            </li>
          </ul>
        </div>
        <div className="btn-side d-flex gap-2 align-items-center">
          <div className="d-none d-xl-block">
            <MainBtn title={"Əlaqə"} />
          </div>
          <div className="d-block d-xl-none" onClick={() => setMenuOpen(true)}>
            {" "}
            <HiMiniBars3 />
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <IoClose size={28} onClick={() => setMenuOpen(false)} />
        </div>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">Ana Səhifə</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/about">Haqqımızda</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/cancer-types">Xərçəng növləri</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="#">Əməliyyatlar</Link> {/* route yox */}
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="#">Qalereya</Link> {/* route yox */}
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/medical-info">Tibbi məlumatlar</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/contact-us">Əlaqə</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
