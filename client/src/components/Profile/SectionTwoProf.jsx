import React from "react";
import Certifications from "./Certifications";
import {cursos} from '../data/proyects_certificates'

const SectionTwoProf = () => {
  return (
    <section className="profile-main-proyect">
      <div className="flex-container">
        <h3>{cursos[0]}</h3>
        <div className="proyects-main-container">
        {cursos[1]?.map((item) => {
          return <Certifications data={item} key={item.id}/>
        })}
        </div>
      </div>
    </section>
  );
};

export default SectionTwoProf;
