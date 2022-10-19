import React from "react";
import profPic from '../../assets/profilePic.png'

const SectionOneProf = () => {
  return (
    <div className="profile-main-container">
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={profPic} alt="" />
        </div>
        <div>
          <h2>Hola!👋🏻 mi nombre es Horus Sinhue</h2>
          <p>
            Recientemente cumplí mi sueño de convertirme en desarrollador, a
            través del Bootcamp de Henry 🚀 pude completar exitósamente el
            programa que me acredita como tal. Desde muy pequeño me interesó el
            mundo de la tecnología, desde el primer momento en que mi padre
            compró una computadora en casa sentí que ese era mi camino. Fue con
            el Boom del internet en América Latina que comence más y más a
            querer conocer más de este mundo, desafortunadamente, por falta de
            acompañamiento todo se quedó hasta ese momento como un sueño. A
            pesar de estudiar algunos semestres de la Ingenieria de Computación
            Administrativa en la Universidad Tec Milenio. Posteriormente me
            dediqué a trabajar, dentro del sector tecnológico, dirigí y coordine
            un equipo multidisciplinario encargado de planear, desarrollar e
            implementar estrategias de comunicación digital dentro de la empresa
            Marketing Strategies and Solutions On Time, donde me desempeñé en el
            área de dirección de proyectos. Con el inicio de la pandemia,
            finalmente me decidí a retomar el camino que me apasiona desde
            pequeño, mi mayor motivación es involucrarme en este mundo nuevo,
            conocer nuevas personas y compartir nuevas experiencias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOneProf;
