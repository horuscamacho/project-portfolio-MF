const express = require("express")
const router = express.Router()
const {enElServidor, sendEmail} = require('../controllers/email')



//Correo electrónico
router.get("/", enElServidor)

router.post("/email", sendEmail)












module.exports = router