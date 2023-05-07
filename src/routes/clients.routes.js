import { Router } from "express";
import { createNewClient, getClients } from '../controllers/clients.controller'
const router = Router();

router.get('/clients', getClients)

router.post('/clients', createNewClient)

router.get('/clients',)

router.delete('/clients',)

router.put('/clients',)

router.get('/clients',)

export default router