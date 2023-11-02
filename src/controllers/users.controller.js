import { getconnection, querys } from '../database'

export const getUsers = async (req, res) => {

    try {

        const pool = await getconnection()
        const result = await pool.request()

        .query(querys.getAllUsers)
        const Users = result.recordset

        res.json({
            id:'1',
            nome:'Francisco'
        })



    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getUserByID = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .query(querys.getUserByID)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getUserAllAccess = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .query(querys.getUserAllAccess)
        res.json(result.recordset)

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getUserAccess = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const acesso = req.body.acesso

        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .input("Acesso", acesso)
            .query(querys.getUserAccess)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const deleteUserByID = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .query(querys.deleteUserByID)
/*         res.json(result.recordset[0]) */
        res.send("Usuario apagado com sucesso!")

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const editUserByID = async (req, res) => {
    try {
        const idusuario = req.body.idusuario
        const codigo = req.body.codigo        
        const usuario = req.body.usuario
        const nome = req.body.nome
        const setor = req.body.setor
        const email = req.body.email
        
        console.log("API : " + email)

        const pool = await getconnection()
        const result = await pool.request()
            .input("IDUsuario", idusuario)
            .input("Codigo", codigo)
            .input("Usuario", usuario)
            .input("Nome", nome)
            .input("Setor", setor)
            .input("Email", email)            

             .query(querys.editUserByID)
            //.query( 'UPDATE USUARIOS SET Usuario = '+ usuario +', Nome ='+ nome +', Setor ='+ email +', Codigo = '+ codigo +', Email = '+ email +' where IDUsuario = ' + idusuario)            
           
        res.send(result + "Usuario modificado com sucesso!")

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const newUser = async (req, res) => {
    try {
        const codigo = req.body.codigo        
        const usuario = req.body.usuario
        const nome = req.body.nome
        const setor = req.body.setor
        const email = req.body.email

        const pool = await getconnection()
        const result = await pool.request()
            .input("Codigo", codigo)
            .input("Usuario", usuario)
            .input("Nome", nome)
            .input("Setor", setor)
            .input("Email", email)            
            .query(querys.newUser)
            res.send("Usuario cadastrado com sucesso!")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
