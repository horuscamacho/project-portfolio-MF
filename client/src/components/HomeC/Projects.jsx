import React from "react";
import imagn from "../../assets/post-1.png";
const Projects = () => {
  return (
    <aticle className="post-container">
      <img src={imagn} alt="" />
      <p>Titulo del blog post</p>
      <p className="text-proyects">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil placeat
        velit ducimus sunt cupiditate.
      </p>
      <a className="blogs-button" href="/">
        Leer más
      </a>
    </aticle>
  );
};

export default Projects;
