import { getconnection, querys } from '../database'

export const getOrders = async (req, res) => {
    try {
        const pool = await getconnection()
        const result = await pool.request().query(querys.getAllOrders)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }

}
