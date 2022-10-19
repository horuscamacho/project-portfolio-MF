
const enElServidor = async (req, res, next) => {
    try {
        console.log("Ya entraste al servidor")
    } catch (error) {
        console.log("no lograste entrar al servidor")
    }
}



module.exports = {
    enElServidor
}