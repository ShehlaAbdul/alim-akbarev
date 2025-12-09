import React from "react";
import "./Style.scss";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

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
    </nav>
  );
}

export default Header;
