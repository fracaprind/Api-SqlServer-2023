import { Router } from "express";
import { getUsers, getUserByID, getUserAccess, getUserAllAccess, deleteUserByID, editUserByID, newUser } from '../controllers/users.controller'

const router = Router();

//Crud usuarios
router.get('/users', getUsers)
router.post('/userByID', getUserByID)
router.post('/userDelete', deleteUserByID)
router.post('/userEdit', editUserByID)
router.post('/userNew', newUser)

//Acessos do usuarios
//Busca todos os acessos do usuario por id do usuario
router.post('/userAllAccess', getUserAllAccess)
//Busca os dados do acesso por id do acesso
router.post('/userAccess', getUserAccess)
export default router