import { body } from 'express-validator';

export const customerValidation = [
	body('name').notEmpty().withMessage("O campo 'name' é obrigatório").trim(),
	body('age')
		.notEmpty()
		.withMessage("O campo 'age' é obrigatório")
		.isNumeric()
		.withMessage("O campo 'age' deve ser um número"),
	body('income')
		.notEmpty()
		.withMessage("O campo 'income' é obrigatório")
		.isNumeric()
		.withMessage("O campo 'income' deve ser um número"),
	body('location')
		.notEmpty()
		.withMessage("O campo 'location' é obrigatório")
		.trim()
		.toUpperCase(),
	body('cpf')
		.notEmpty()
		.withMessage("O campo 'location' é obrigatório")
		.isLength({ min: 14, max: 14 })
		.matches(/\d{3}.\d{3}\d{3}-\d{2}/),
];
