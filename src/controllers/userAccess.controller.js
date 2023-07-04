import { getconnection } from '../database/connection'
import querys from '../database/querys'

export const getUserAccess = async (req, res) => {
    const idusuario = req.body.idusuario
    const acesso = req.body.acesso

    console.log(req.body)

    const pool = await getconnection()
    const result = await pool.request()
    .input("IDUsuario",idusuario)
    .query(querys.getUserAccess)
        // console.log(result)
    res.json(result.recordset)

}