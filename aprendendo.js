const mongoose = require('mongoose')

// Configurando o mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/aprendendo").then(() => {
        console.log("Conectado ao MongoDB!")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar no mongoDB: "+err)
    })

// Model - Usuários
const UsuarioSchema= mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
    }
})
// Collection
  mongoose.model('usuarios', UsuarioSchema)

const Usuario = mongoose.model('usuarios')
  new Usuario({
      nome: "Ana Paula",
      sobrenome: "Lins",
      email: "teste2@email.com",
      idade: 35,
      pais: "Brasil"
  }).save().then(() => {
      console.log("Usuário criado com sucesso!")
  }).catch((err) => {
      console.log("Houve um erro ao registrar o usuário: "+err)
  })