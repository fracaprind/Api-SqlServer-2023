import { getconnection, querys } from '../database'

export const getUserAccess = async (req, res) => {

    try {
        const idusuario = req.body.idusuario
        const acesso = req.body.acesso

        console.log(req.body)

        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .query(querys.getUserAccess)
        // console.log(result)
        res.json(result.recordset)

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }


}