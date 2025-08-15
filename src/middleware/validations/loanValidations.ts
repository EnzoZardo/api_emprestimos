import { CreditTypes } from '@/models/Credit';
import { body, param } from 'express-validator';

const deleteLoanValidation = [
	param('id')
		.notEmpty()
		.withMessage("O parametro 'id' não pode estar vazio."),
];

const findLoansValidation = [
	param('cpf')
		.notEmpty()
		.withMessage("O parametro 'cpf' é obrigatório")
		.isNumeric()
		.matches(/\d{11}/)
		.withMessage("O parametro 'cpf' deve ter 11 dígitos"),
];

const createLoanValidation = [
	body('installmentsNumber')
		.notEmpty()
		.withMessage("O campo 'installmentsNumber' é obrigatório")
		.isInt({ min: 0 })
		.withMessage(
			"O campo 'installmentsNumber' deve ser um número inteiro maior do que zero"
		),
	body('amount')
		.notEmpty()
		.withMessage("O campo 'amount' é obrigatório")
		.isFloat()
		.withMessage("O campo 'amount' deve ser um número"),
	body('cpf')
		.notEmpty()
		.withMessage("O campo 'cpf' é obrigatório")
		.isNumeric()
		.matches(/\d{11}/)
		.withMessage("O campo 'cpf' deve ter 11 dígitos"),
	body('type')
		.isIn(Object.values(CreditTypes))
		.withMessage("O campo 'type' deve estar entre os valores permitidos"),
];

export { deleteLoanValidation, createLoanValidation, findLoansValidation };
