import { Router } from "express";
import { getUsers,getUserByID,getUserAccess,getUserAllAccess,deleteUserByID,editUserByID,newUser } from '../controllers/users.controller'

const router = Router();

// router.get('/users/:page', getUsers)
router.get('/users', getUsers)
router.post('/userByID', getUserByID)
router.post('/userAccess', getUserAccess)
router.post('/userAllAccess', getUserAllAccess)
router.post('/userDelete', deleteUserByID)
router.post('/userEdit', editUserByID)
router.post('/userNew', newUser)
export default router