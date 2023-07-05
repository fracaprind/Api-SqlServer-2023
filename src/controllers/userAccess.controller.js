import { getconnection, querys } from '../database'

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