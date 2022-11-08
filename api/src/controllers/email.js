const { createTransport } = require("nodemailer");

const sendEmail = async (req, res, next) => {
  let password = "jdwosmhgbyqjjzls";
  let correo = "tickethenryinfo@gmail.com";

  const {name, email, message } = req.body

  const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: correo,
      pass: password,
    },
  });

  const mailOptions = {
    from: "TicketShop",
    to: "camachohorus@gmail.com",
    subject: "Correo desde el portafolio",
    template: "email",
    text: `Mensaje de ${name}, enviado desde el correo ${email} con el mensaje: 
    ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado satisfactoriamente");
  } catch (error) {
    console.log(error.message);
  }
};

const enElServidor = async (req, res, next) => {
  try {
    res.send("Listo")
  } catch (error) {
    console.log("no lograste entrar al servidor");
  }
};

module.exports = {
  enElServidor,
  sendEmail,
};
