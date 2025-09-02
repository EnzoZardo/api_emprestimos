"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMongoModel = void 0;
var LoanSchema_1 = __importDefault(require("@/models/MongoDB/LoanSchema"));
var asMongoModel = function (model) {
    return new LoanSchema_1.default({
        amount: model.amount,
        customerCpf: model.customerCpf,
        installmentsNumber: model.installmentsNumber,
        interestRate: model.interestRate,
        type: model.type,
    });
};
exports.asMongoModel = asMongoModel;
