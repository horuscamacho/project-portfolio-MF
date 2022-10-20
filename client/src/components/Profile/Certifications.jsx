import React from "react";

const Certifications = (cursos) => {
  const {data} = cursos
  return (
    <article className="proyect-container">
      <img src={data.link} alt=""/>
      <h4>{data.curso}</h4>
      <p>
        {data.descripcion}
      </p>
    </article>
  );
};

export default Certifications;
