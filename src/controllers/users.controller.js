import { getconnection } from '../database/connection'

export const getUsers = async (req, res) => {

    const pool = await getconnection()
    const result = await pool.request().query('SELECT * FROM USUARIOS')
    // console.log(result)

    res.json(result.recordset)

}
