import React from "react";
import Certifications from "./Certifications";


const SectionTwoProf = () => {
  return (
    <section className="profile-main-proyect">
      <div className="flex-container">
        <h3>Proyectos</h3>
        <div className="proyects-main-container">
          <Certifications />
          <Certifications />
          <Certifications />
          <Certifications />
          <Certifications />
          <Certifications />
        </div>
      </div>
    </section>
  );
};

export default SectionTwoProf;
