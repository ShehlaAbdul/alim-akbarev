import React from 'react';
import "./Style.scss";
import BreadCrumbBtn from '../../components/BreadCrumbBtn/BreadCrumbBtn';
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Loc from "../../assets/icons/loc.svg";


function ContactPage() {
  return (
    <>
      <BreadCrumbBtn />
      <section id="contact">
        <div className="contact row">
          <div className="col-12 col-md-5 p-0">
            <h1>Əlaqə</h1>
            <div className="contact-side d-flex flex-column">
              <div className="mail d-flex ">
                <div className="box">
                  <img src={Mail} alt="" />
                </div>
                <div className="text-side">
                  <p>E-mail ünvanı</p>
                  <span>info@alimakbarov.az</span>
                </div>
              </div>

              <div className="mail d-flex">
                <div className="box">
                  <img src={Phone} alt="" />
                </div>
                <div className="text-side">
                  <p>E-mail ünvanı</p>
                  <span>info@alimakbarov.az</span>
                </div>
              </div>
              <div className="mail d-flex">
                <div className="box">
                  <img src={Loc} alt="" />
                </div>
                <div className="text-side">
                  <p>E-mail ünvanı</p>
                  <span>info@alimakbarov.az</span>
                </div>
              </div>
            </div>
          </div>
          <div className="map col-12 col-md-7 border"></div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

