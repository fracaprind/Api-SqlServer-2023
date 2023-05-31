import { Router } from "express";
import { postLogin } from '../controllers/login.controller'

const router = Router();

router.post('/login', postLogin)

export default router