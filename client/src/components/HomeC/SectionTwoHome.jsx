import React from "react";
import Projects from "./Projects";
import { proyectos } from "../data/proyects_certificates";

const SectionTwoHome = () => {
  return (
    <section className="blogs-posts-container">
      <div className="blogs-main-post">
        <h3>{proyectos[0]}</h3>
        {proyectos[1]?.map((item) => {
          return <Projects data={item} key={item.id}/>
        })}
      </div>
    </section>
  );
};

export default SectionTwoHome;
