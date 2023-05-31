import { getconnection } from '../database/connection'

export const getOrders = async (req, res) => {

    const pool = await getconnection()
    const result = await pool.request().query('SELECT * FROM PRODUCAO order BY PrazoEntrega DESC')
    console.log(result)

    res.json(result.recordset)

}
