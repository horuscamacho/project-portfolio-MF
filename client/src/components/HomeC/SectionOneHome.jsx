import React from "react";
import mainPic from '../../assets/main-portafolio.png'

const SectionOneHome = () => {
  return (
    <section className="blogs-news-container">
      <div className="blogs-main-new">
        <h3>Bienvenido a mi portafolio</h3>
        <div className="blogs-main-new-mobile">
        <div className="blogs-news-img-container">
          <img src={mainPic} alt="" />
        </div>
        <div className="blogs-news-info-container">
          <h2>Habilidades</h2>
          <p>
            En el Bootcamp de Henry adquirí habilidades como Full Stack Web
            Developer, entre las cuales destacan el uso de tecnologías como
            React, Redux, Express, HTML, Tailwind, CSS, JavaScript, entre
            otras..
          </p>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionOneHome;
