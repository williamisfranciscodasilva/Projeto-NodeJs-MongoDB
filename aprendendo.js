const mongoose = require('mongoose')

// Configurando o mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/aprendendo").then(() => {
        console.log("Conectado ao MongoDB!")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar no mongoDB: "+err)
    })