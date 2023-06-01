import { getconnection } from '../database/connection'
import querys from '../database/querys'
const jwt = require('jsonwebtoken');
import * as dotenv from 'dotenv';

dotenv.config();

export const postLogin = async (req, res) => {

    const pool = await getconnection()

    const senha = req.body.senha
    const email = req.body.email

 //   console.log('Requisição : ',req.body)

    const result = await pool.request()
    .input("Email",email)
    .query(querys.getLogin)

   const user = result.recordset[0]
    if (user === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorretas!"
        });
    };
    
   // var token = jwt.sign({ id: user.IDUsuario }, process.env.SECRET, {
    var token = jwt.sign({ id: user.IDUsuario }, '583a3549456251362c5a21314245576f', {
        //expiresIn: 60 // 10min
        expiresIn: '7d', // 7 dia
    });

    console.log('Senha recebida: ',senha)
    console.log('Senha banco', user.Senha)

    if (senha !== user.Senha) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    };

    if (senha === user.Senha) {
 //   console.log('Senha: ',senha)
 //   console.log('Dados usuario retornado', user)

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        user: { Email: user.Email, Usuario:user.Usuario , Nome:user.Nome, Setor: user.Setor},
        token,
    });
    }else{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    }
}
