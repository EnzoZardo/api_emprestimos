"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Defaults_1 = require("@/utils/MongoDB/Defaults");
var mongoose_1 = __importDefault(require("mongoose"));
var LoanSchema = new mongoose_1.default.Schema({
    customerCpf: Defaults_1.RequiredString,
    amount: Defaults_1.RequiredNumber,
    installmentsNumber: Defaults_1.RequiredNumber,
    interestRate: Defaults_1.RequiredNumber,
    type: Defaults_1.RequiredString,
});
exports.default = mongoose_1.default.model('Loan', LoanSchema);
