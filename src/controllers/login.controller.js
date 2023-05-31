import { getconnection } from '../database/connection'
import querys from '../database/querys'

export const postLogin = async (req, res) => {

    const pool = await getconnection()

    const senha = req.body.senha
    const email = req.body.email

    console.log('Requisição : ',req.body)

    const result = await pool.request()
    .input("Email",email)
    .query(querys.getLogin)

   const user = result.recordset
    if (user === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorretas!"
        });
    };

    if (senha !== user.Senha) {
        console.log(senha)
        console.log(user.senha)

        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    };

    console.log('Senha: ',senha)
    console.log('Dados usuario retornado', user)

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        user: { Nome: user.Nome }
    });
}
