const mongoose = require('mongoose');
const express = require('express');
const cors =  require('cors');
const port = process.env.PORT || 3000;
const app = express()
const controllerR = require('./controller/controllerRegister')
const controllerL = require('./controller/controllerLogin')
require('dotenv').config()


mongoose.Promise = global.Promise;

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// Conectando com o banco
mongoose.connect('mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9rqhqsn.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'Login'
})

.then(() => {
    console.log('Ta on')
}) 
.catch((error) => {
    console.error(error);
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/cadastro", controllerR.post)

// app.post("/cadastro" , (req,res) =>{
//     let email = req.body.email
//     let senha = req.body.senha 

//     console.log(email,senha)
//     res.json("True").status(200)
// })
app.post("/usuario", controllerL.post)

app.listen(port, () => {
    console.log(`Ta rodando na porta: ${port}`)
});
