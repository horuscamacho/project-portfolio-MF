import React, { useState } from 'react'
const Section = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  })
  function handleChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
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
                  <input onChange={(e) => handleChange(e)} type="text" name="name" required="required" />
                </div>
                <div className="inputBox">
                    <span>Email: </span>
                  <input onChange={(e) => handleChange(e)} type="email" name="email" required="required" />
                  
                </div>
                <div className="inputBox">
                    <span>Escribe tu mensaje aquí: </span>
                  <textarea onChange={(e) => handleChange(e)} name="message" required="required" defaultValue=""></textarea>
                  
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