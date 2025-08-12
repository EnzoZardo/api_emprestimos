import { body } from 'express-validator';

export const customerValidation = () => {
	return [
		body('name')
			.notEmpty()
			.withMessage("O campo 'name' é obrigatório")
			.trim(), // Remove espaços em branco do início e fim
		body('age')
			.notEmpty()
			.withMessage('Email is mandatory')
			.isEmail()
			.withMessage('Invalid email format')
			.normalizeEmail(),
	];
};
