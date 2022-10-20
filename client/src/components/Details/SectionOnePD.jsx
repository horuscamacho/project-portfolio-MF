import React from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../data/proyects_certificates";


const SectionOnePD = () => {
  const { id } = useParams()
  const allProjects = proyectos[1]
  const project = allProjects.filter((element) => element.id === parseInt(id))
  console.log(project)
  return (
    <>
      <section className="blogpost-img-container">
        <img src={project[0].link} alt="" />
      </section>
      <section>
        <div>
          <div className="blogpost-title-container">
            <h3>{project[0].proyecto}</h3>
          </div>
          <article className="blogpost-detail-container">
            <p>{project[0].details}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionOnePD;
