const Token = require('../model/token/insertToken');
const TokenModel = require("../model/token/tokenModel")
const User = require('../model/user/userModel');


exports.post = (req, res) => {

    try {
        // 
        const SalvarDados = ({
            email: req.body.email,
            senha: req.body.senha
        });
        if (SalvarDados.email != undefined && SalvarDados.senha != undefined) {
            User.find({ email: SalvarDados.email })
                .then((resultado) => {

                    let resultado_tratado = resultado
                    resultado_tratado = resultado_tratado[0]
                    console.log(resultado_tratado)

                    if (resultado_tratado.senha === SalvarDados.senha) {
                      const tokenSocorro =  Token.registerToken(resultado_tratado._id, resultado_tratado.email)

                        // Token.find().sort({})
                        res.json(tokenSocorro).status(200)

                    }
                    else if (resultado_tratado.senha != SalvarDados.senha) {
                        res.json('Senha incorreta').status(401)
                        // console.log(resultado_tratado)

                    }
                    else if (resultado_tratado === undefined) {
                        // res.json('Usuario nao encontrado')
                        res.send(resultado_tratado).status(404)

                    }
                })

        }} catch (error) {
            console.error(error);
            res.status(500).send({ status: 500, message: 'Servidor morreu' });
        }
}

