import { Router } from "express";
import { getUsers,getUserByID,getUserAccess,deleteUserByID } from '../controllers/users.controller'

const router = Router();

router.get('/users/:page', getUsers)
router.post('/userByID', getUserByID)
router.post('/userAccess', getUserAccess)
router.post('/userDelete', deleteUserByID)

export default router