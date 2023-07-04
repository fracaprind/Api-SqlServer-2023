import { Router } from "express";
import { getUserAccess } from '../controllers/userAccess.controller'

const router = Router();

router.post('/userAccess', getUserAccess)

export default router