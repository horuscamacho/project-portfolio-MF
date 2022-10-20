import React from "react";

const Projects = (projects) => {
  const {data}  = projects
  const urlTo = `/project/${data.id}`
  return (
    <article className="post-container">
      <img src={data.link} alt="" />
      <h4>{data.proyecto}</h4>
      <p className="text-proyects">
        {data.descripcion}
      </p>
      <a className="blogs-button" href={urlTo}>
        Leer más
      </a>
    </article>
  );
};

export default Projects;
