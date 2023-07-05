import { getconnection, querys } from '../database'

export const getClients = async (req, res) => {
    try{
        const pool = await getconnection()
        const result = await pool.request().query(querys.getAllClients)
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

export const createNewClient = async (req, res) => {
    res.json('Novo cliente')
}