"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CustomerController_1 = require("@/controllers/CustomerController");
var validationsErrorHandler_1 = __importDefault(require("@/middleware/validationsErrorHandler"));
var customerValidations_1 = require("@/middleware/validations/customerValidations");
var router = (0, express_1.Router)();
router.get('/clientes', CustomerController_1.listCustomers);
router.post('/clientes', customerValidations_1.customerCreateValidation, validationsErrorHandler_1.default, CustomerController_1.createCustomer);
router.get('/clientes/:cpf', customerValidations_1.customerCpfValidation, validationsErrorHandler_1.default, CustomerController_1.findCustomer);
router.delete('/clientes/:cpf', customerValidations_1.customerCpfValidation, validationsErrorHandler_1.default, CustomerController_1.deleteCustomer);
exports.default = router;
