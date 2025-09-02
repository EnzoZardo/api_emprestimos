"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerCpfValidation = exports.customerCreateValidation = void 0;
var express_validator_1 = require("express-validator");
var customerCreateValidation = [
    (0, express_validator_1.body)('name').notEmpty().withMessage("O campo 'name' é obrigatório").trim(),
    (0, express_validator_1.body)('age')
        .notEmpty()
        .withMessage("O campo 'age' é obrigatório")
        .isInt({ min: 0 })
        .withMessage("O campo 'age' deve ser um número inteiro maior do que zero"),
    (0, express_validator_1.body)('income')
        .notEmpty()
        .withMessage("O campo 'income' é obrigatório")
        .isNumeric()
        .withMessage("O campo 'income' deve ser um número"),
    (0, express_validator_1.body)('location')
        .notEmpty()
        .withMessage("O campo 'location' é obrigatório")
        .trim()
        .toUpperCase(),
    (0, express_validator_1.body)('cpf')
        .notEmpty()
        .withMessage("O campo 'cpf' é obrigatório")
        .isNumeric()
        .matches(/\d{11}/)
        .withMessage("O campo 'cpf' deve ter 11 dígitos"),
];
exports.customerCreateValidation = customerCreateValidation;
var customerCpfValidation = [
    (0, express_validator_1.body)('cpf')
        .notEmpty()
        .withMessage("O campo 'cpf' é obrigatório")
        .isNumeric()
        .matches(/\d{11}/)
        .withMessage("O campo 'cpf' deve ter 11 dígitos"),
];
exports.customerCpfValidation = customerCpfValidation;
