import { getconnection, querys } from '../database'

export const getUsers = async (req, res) => {
    try {
        const { page = 1 } = req.params
        const limit = 20

        const pool = await getconnection()
        const result = await pool.request()
        .input("Pagina", page)
        .input("QtdPorPagina", limit)
        .query(querys.getAllUsers)
        const Users = result.recordset
        var lastpage = 1

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
