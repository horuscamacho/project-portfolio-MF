import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

// require("dotenv").config();
// const {SERVICE_ID, PRIVATE_KEY, PUBLIC_KEY} = process.env

const Section = () => {
  // console.log(SERVICE_ID)



  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_4hhpz8n', 'template_38aaco5', form.current, 'xyD7w-rVqLsTDi5Ml')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };



 



  return (
    <section>
        <div className="container-contact-main">
            <div className="content">
              <h2>Contacto</h2>
              <p>
                Gracias por visitar mi espacio, si quieres ponerte en contacto
                conmigo escríbeme.
              </p>
            </div>
            <div className="contactForm">
              <form >
                <h2>Envíame un correo</h2>
                <div className="inputBox">
                    <span>Nombre: </span>
                  <input  type="text" name="name" required="required" />
                </div>
                <div className="inputBox">
                    <span>Email: </span>
                  <input  type="email" name="email" required="required" />
                  
                </div>
                <div className="inputBox">
                    <span>Escribe tu mensaje aquí: </span>
                  <textarea  name="message" required="required" defaultValue=""></textarea>
                  
                </div>
                <div className="inputBox">
                  <input type="submit" name="" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
    </section>
  )
}

export default Section