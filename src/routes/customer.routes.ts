import { Router } from 'express';
import {
	findCustomer,
	listCustomers,
} from '../controllers/CustomerController.js';

const router = Router();

router.get('/clientes', listCustomers);
router.get('/clientes/:cpf', findCustomer);

export default router;
