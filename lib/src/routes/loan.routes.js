"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoanController_1 = require("@/controllers/LoanController");
var customerValidations_1 = require("@/middleware/validations/customerValidations");
var validationsErrorHandler_1 = __importDefault(require("@/middleware/validationsErrorHandler"));
var loanValidations_1 = require("@/middleware/validations/loanValidations");
var router = (0, express_1.Router)();
router.post('/creditos', customerValidations_1.customerCreateValidation, validationsErrorHandler_1.default, LoanController_1.listCredits);
router.delete('/emprestimos/:id', loanValidations_1.deleteLoanValidation, validationsErrorHandler_1.default, LoanController_1.deleteCustomerLoan);
router.get('/emprestimos', LoanController_1.listLoans);
router.post('/emprestimos', loanValidations_1.createLoanValidation, validationsErrorHandler_1.default, LoanController_1.createCustomerLoan);
exports.default = router;
