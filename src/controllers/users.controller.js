import { getconnection, querys } from '../database'

export const getUsers = async (req, res) => {
    try {
        const { page = 1 } = req.params.page
        const limit = 20
/*         console.log(req.params.page) */

        const pool = await getconnection()
        const result = await pool.request()
        .input("Pagina", page)
        .input("QtdPorPagina", limit)
        .query(querys.getAllUsers)
        const Users = result.recordset
        var lastpage = 1
/*          console.log(Users) */
        //Busca total de registros na tabela
        const countUser = await pool.request()
        .query(querys.getTotalUsers)
        const totalUsers = countUser.recordset[0].TotalRegistros
        if(totalUsers===null){
            return({
                erro:true,
                mensagem:"Nenhum usuário encontrado!"
            })
        }else{
            lastpage = Math.ceil(totalUsers/limit)
        }


        res.json({
            Users,
            totalUsers,
            lastpage
        })

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getUserByID = async (req, res) => {
    try {
        const idusuario = req.body.idusuario

        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .query(querys.getUserByID)
        // console.log(result)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }


}

export const getUserAccess = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const acesso = req.body.acesso

        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .input("Acesso", acesso)
            .query(querys.getUserAccess)
        // console.log(result)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }


}
