import { Router } from "express";
import { getUsers,getUserByID,getUserAccess } from '../controllers/users.controller'

const router = Router();

router.get('/users/:page', getUsers)
router.post('/userByID', getUserByID)
router.post('/userAccess', getUserAccess)

export default router