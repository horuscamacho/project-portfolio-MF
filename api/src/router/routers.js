const express = require("express")
const router = express.Router()
const {enElServidor} = require('../controllers/email')



//Correo electrónico
router.get("/", enElServidor)











module.exports = router