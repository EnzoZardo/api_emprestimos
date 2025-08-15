import { body } from 'express-validator';

const customerCreateValidation = [
	body('name').notEmpty().withMessage("O campo 'name' é obrigatório").trim(),
	body('age')
		.notEmpty()
		.withMessage("O campo 'age' é obrigatório")
		.isInt({ min: 0 })
		.withMessage(
			"O campo 'age' deve ser um número inteiro maior do que zero"
		),
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
		.withMessage("O campo 'cpf' é obrigatório")
		.isNumeric()
		.matches(/\d{11}/)
		.withMessage("O campo 'cpf' deve ter 11 dígitos"),
];

const customerCpfValidation = [
	body('cpf')
		.notEmpty()
		.withMessage("O campo 'cpf' é obrigatório")
		.isNumeric()
		.matches(/\d{11}/)
		.withMessage("O campo 'cpf' deve ter 11 dígitos"),
];

export { customerCreateValidation, customerCpfValidation };
