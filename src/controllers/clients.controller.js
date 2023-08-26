import { getconnection, querys, sql } from '../database'

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
const{nomerazao} = req.body
console.log(nomerazao)

if (nomerazao == null){
    return res.status(400).json({msg:'Bad Request. Please fill all fields!'})
}

const pool = await getconnection();

await pool.request().input("NomeRazao", sql.VarChar,"p").query('INSERT INTO Clientes (NomeRazao) VALUES (@nomerazao)')

res.json('Novo cliente')
}