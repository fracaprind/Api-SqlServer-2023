import { Router } from "express";
import { getCompanys } from '../controllers/company.controller'
const router = Router();

router.get('/companys', getCompanys)

export default router