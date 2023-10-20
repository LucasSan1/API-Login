const Session = require('./tokenModel')
const Token = require('../../controller/jwt');


function registerToken (id,email,msg="Cadastrado!!") {
    //Gera o token 
    const tokenGerado = Token.gerarToken(id,email)

    const createSession = new Session({
        token: tokenGerado,
        userId: id
    })
    
    //Cadastra no banco de dados
    const session = createSession.save()

    try{
        if (session) {
            // O token foi registrado com sucesso
            return {
                status: 201,
                message: msg,
                token: tokenGerado,
                expirity: new Date().setHours(new Date().getHours() + 2)
            };
        } else {
            // O registro falhou
            return {
                status: 400,
                error: 'Falha ao cadastrar o token'
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            message: 'Servidor morreu'
        };
    }
}

module.exports = {
    registerToken,
}