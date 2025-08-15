import { Router } from 'express';
import {
	createCustomer,
	deleteCustomer,
	findCustomer,
	listCustomers,
} from '@/controllers/CustomerController';
import validate from '@/middleware/validationsErrorHandler';
import {
	customerCpfValidation,
	customerCreateValidation,
} from '@/middleware/validations/customerValidations';

const router = Router();

router.get('/clientes', listCustomers);
router.post('/clientes', customerCreateValidation, validate, createCustomer);
router.get('/clientes/:cpf', customerCpfValidation, validate, findCustomer);
router.delete(
	'/clientes/:cpf',
	customerCpfValidation,
	validate,
	deleteCustomer
);

export default router;
