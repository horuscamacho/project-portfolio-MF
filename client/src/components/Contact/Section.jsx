import React from 'react'

const Section = () => {
  return (
    <section>
        <div class="container-contact-main">
            <div class="content">
              <h2>Contacto</h2>
              <p>
                Gracias por visitar mi espacio, si quieres ponerte en contacto
                conmigo escríbeme.
              </p>
            </div>
            <div class="contactForm">
              <form>
                <h2>Envíame un correo</h2>
                <div class="inputBox">
                    <span>Nombre: </span>
                  <input type="text" name="" required="required" />
                </div>
                <div class="inputBox">
                    <span>Email: </span>
                  <input type="text" name="" required="required" />
                  
                </div>
                <div class="inputBox">
                    <span>Escribe tu mensaje aquí: </span>
                  <textarea required="required"> </textarea>
                  
                </div>
                <div class="inputBox">
                  <input type="submit" name="" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
    </section>
  )
}

export default Section