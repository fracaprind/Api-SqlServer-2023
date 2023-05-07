import { Router } from "express";
import { getOrders } from '../controllers/orders.controller'
const router = Router();

router.get('/orders', getOrders)

router.post('/orders',)

router.get('/orders',)

router.delete('/orders',)

router.put('/orders',)

router.get('/orders',)

export default router