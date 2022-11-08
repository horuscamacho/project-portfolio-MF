import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// require("dotenv").config();
// const {SERVICE_ID, PRIVATE_KEY, PUBLIC_KEY} = process.env

const Section = () => {

  const [email, setEmail] = useState("Hola")
  
  useEffect(() => {

  },[email])

  const sendEmail = async (data, res, req) => {
    try {
      await axios.post("https://horus-portafolio.onrender.com/email", data)
      return 
    } catch (error) {
      return
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      "message": ''
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required()
    }),
    onSubmit: (formData) => {
     setEmail(formData)
     sendEmail(email)
    formik.handleReset()
    }
  })


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
              <form onSubmit={formik.handleSubmit} >
                <h2>Envíame un correo</h2>
                <div className="inputBox">
                    <span>Nombre: </span>
                  <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Tu nombre" />
                </div>
                <div className="inputBox">
                    <span>Email: </span>
                  <input  type="text" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="example@example.com"/>
                  
                </div>
                <div className="inputBox">
                    <span>Escribe tu mensaje aquí: </span>
                  <textarea type='text' name="message" onChange={formik.handleChange} value={formik.values.message} placeholder="Tu mensaje quí"></textarea>
                  
                </div>
                <div className="inputBox">
                  <input type="submit" name="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
    </section>
  )
}

export default Section