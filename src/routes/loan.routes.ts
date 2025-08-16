import { Router } from 'express';
import {
	createCustomerLoan,
	deleteCustomerLoan,
	listCredits,
	listCustomerLoans,
	listLoans,
} from '@/controllers/LoanController';
import { customerCreateValidation } from '@/middleware/validations/customerValidations';
import validate from '@/middleware/validationsErrorHandler';
import {
	createLoanValidation,
	deleteLoanValidation,
	findLoansValidation,
} from '@/middleware/validations/loanValidations';

const router = Router();

router.post('/creditos', customerCreateValidation, validate, listCredits);
router.delete(
	'/emprestimos/:id',
	deleteLoanValidation,
	validate,
	deleteCustomerLoan
);
router.get(
	'/emprestimos/:cpf',
	findLoansValidation,
	validate,
	listCustomerLoans
);
router.get('/emprestimos', listLoans);
router.post('/emprestimos', createLoanValidation, validate, createCustomerLoan);

export default router;
