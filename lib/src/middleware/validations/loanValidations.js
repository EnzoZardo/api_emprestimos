"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoanValidation = exports.deleteLoanValidation = void 0;
var Credit_1 = require("@/models/Credit");
var express_validator_1 = require("express-validator");
var deleteLoanValidation = [
    (0, express_validator_1.param)('id')
        .notEmpty()
        .withMessage("O parametro 'id' não pode estar vazio."),
];
exports.deleteLoanValidation = deleteLoanValidation;
var createLoanValidation = [
    (0, express_validator_1.body)('installmentsNumber')
        .notEmpty()
        .withMessage("O campo 'installmentsNumber' é obrigatório")
        .isInt({ min: 0 })
        .withMessage("O campo 'installmentsNumber' deve ser um número inteiro maior do que zero"),
    (0, express_validator_1.body)('amount')
        .notEmpty()
        .withMessage("O campo 'amount' é obrigatório")
        .isFloat()
        .withMessage("O campo 'amount' deve ser um número"),
    (0, express_validator_1.body)('cpf')
        .notEmpty()
        .withMessage("O campo 'cpf' é obrigatório")
        .isNumeric()
        .matches(/\d{11}/)
        .withMessage("O campo 'cpf' deve ter 11 dígitos"),
    (0, express_validator_1.body)('type')
        .isIn(Object.values(Credit_1.CreditTypes))
        .withMessage("O campo 'type' deve estar entre os valores permitidos"),
];
exports.createLoanValidation = createLoanValidation;
