import { getconnection } from '../database/connection'

export const getCompanys = async (req, res) => {

    const pool = await getconnection()
    const result = await pool.request().query('SELECT * FROM EMPRESA order BY Empresa DESC')
   // console.log(result)

    res.json(result.recordset)

}