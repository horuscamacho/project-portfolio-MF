import React from "react";
import email from "../../assets/email.png"
import cv from '../../assets/cv.png'

const SectionContactF = () => {
  return (
    <section className="contact-main-container">
      <div className="contact-left-container">
        <img src={email} alt="" />
        <div className="contact-left">
          <a href="/contact">Contacto</a>
          <p>Envíame un correo electrónico para contactarme.</p>
        </div>
      </div>
      <div className="contact-right-container">
        <img src={cv} alt="" />
        <div className="contact-right">
          <a href="/">Currículum</a>
          <p>Descarga mi Currículum.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionContactF;
