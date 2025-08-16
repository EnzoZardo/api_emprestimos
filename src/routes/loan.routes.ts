import { Router } from 'express';
import {
	createCustomerLoan,
	deleteCustomerLoan,
	listCredits,
	listLoans,
} from '@/controllers/LoanController';
import { customerCreateValidation } from '@/middleware/validations/customerValidations';
import validate from '@/middleware/validationsErrorHandler';
import {
	createLoanValidation,
	deleteLoanValidation,
} from '@/middleware/validations/loanValidations';

const router = Router();

router.post('/creditos', customerCreateValidation, validate, listCredits);
router.delete(
	'/emprestimos/:id',
	deleteLoanValidation,
	validate,
	deleteCustomerLoan
);
router.get('/emprestimos', listLoans);
router.post('/emprestimos', createLoanValidation, validate, createCustomerLoan);

export default router;
