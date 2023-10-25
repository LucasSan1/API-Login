const mongoose = require('mongoose');
const express = require('express');
const cors =  require('cors');
const port = process.env.PORT || 3000;
const app = express()
const controllerR = require('./controller/controllerRegister')
const controllerL = require('./controller/controllerLogin')
require('dotenv').config()


mongoose.Promise = global.Promise;

//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// Conectando com o banco
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9rqhqsn.mongodb.net/?retryWrites=true&w=majority`, {
    dbName: 'Login'
})

.then(() => {
    console.log('Ta on')
}) 
.catch((error) => {
    console.error(error);
});


//Rotas da API
app.post("/cadastro", controllerR.post)
app.post("/usuario", controllerL.post)

app.listen(port, () => {
    console.log(`Ta rodando na porta: ${port}`)
});
