import { getconnection } from '../database/connection'

export const getClients = async (req, res) => {

    const pool = await getconnection()
    const result = await pool.request().query('SELECT * FROM CLIENTES')
    // console.log(result)

    res.json(result.recordset)

}

export const createNewClient = async (req, res) => {
    res.json('Novo cliente')
}