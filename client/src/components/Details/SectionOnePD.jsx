import React from "react";
import imgDum from "../../assets/post-1.png";

const SectionOnePD = () => {
  return (
    <>
      <section className="blogpost-img-container">
        <img src={imgDum} alt="" />
      </section>
      <section>
        <div>
          <div className="blogpost-title-container">
            <h3>Titulo</h3>
          </div>
          <article className="blogpost-detail-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis dignissimos iure rem, ipsa molestiae obcaecati adipisci
              nam dicta unde dolor voluptatum ipsum aperiam, voluptate est
              recusandae aliquid exercitationem repellendus. Velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              officia totam velit, odio fuga maxime esse eius quod minus cum
              doloribus minima, excepturi animi a saepe? Quidem sed voluptate
              fugit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              molestias cupiditate quidem repellat alias, ab inventore quam
              adipisci, dolore mollitia id omnis quas consequatur. Voluptatibus
              in eius aliquid natus architecto? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Est repellendus voluptatum,
              molestiae impedit eveniet quia obcaecati consequuntur laborum.
              Doloremque nemo nulla repudiandae minima minus odio corporis ipsam
              fugit optio deserunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio, reiciendis illo libero placeat optio
              voluptate fugiat magnam quam quod aut voluptatem totam iusto quo
              nobis minima necessitatibus similique! Architecto, officia.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionOnePD;
