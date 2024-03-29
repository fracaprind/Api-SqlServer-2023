import { getconnection, querys } from '../database'
const jwt = require('jsonwebtoken');
import * as dotenv from 'dotenv';

dotenv.config();

export const postLogin = async (req, res) => {

    const pool = await getconnection()

    const senha = req.body.senha
    const email = req.body.email

    console.log('Email : ' + req.body.email)
    console.log('Senha : ' + req.body.senha)

    if (senha == null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Valor de senha não chegou!"
        });
    };

    try {
        const result = await pool.request()
        .input("Email",email)
        .query(querys.getLogin)
    
    
       const user = result.recordset[0]
       console.log('Usuario : ' + result)
    
        if (user === null || user == "") {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorretas!"
            });
        };
        
        if (senha !== user.Senha) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        };
    
        if (senha === user.Senha ) {
    
       // var token = jwt.sign({ id: user.IDUsuario }, process.env.SECRET, {
        var token = jwt.sign({ id: user.IDUsuario }, '583a3549456251362c5a21314245576f', {
            //expiresIn: 60 // 10min
            expiresIn: '7d', // 7 dia
        });
    
        return res.json({
            erro: false,
            mensagem: "Login realizado com sucesso!",
            user: { IDUsuario: user.IDUsuario, Senha:user.Senha, Email: user.Email, Usuario:user.Usuario , Nome:user.Nome, Setor: user.Setor},
            token,
        });
    
        }else{
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        }
    } catch (error) {
        return res.status(500).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    }


}
