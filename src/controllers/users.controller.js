import { getconnection, querys } from '../database'

export const getUsers = async (req, res) => {
    try {
        const pool = await getconnection()
        const result = await pool.request().query(querys.getAllUsers)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
