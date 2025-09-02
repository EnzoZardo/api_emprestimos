"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCustomerLoans = exports.deleteLoan = exports.requestNewLoan = exports.calculateCredits = void 0;
var Credit_1 = require("@/models/Credit");
var Parameters_1 = require("@/parameters/Parameters");
var loan_repository_1 = require("@/repositories/loan.repository");
var CustomerServices_1 = require("@/services/CustomerServices");
var Failure_1 = require("@/utils/ResultPattern/Failure");
var Result_1 = require("@/utils/ResultPattern/Result");
var findAvailableCredits = function (income, age, location) {
    var loans = [];
    if (Parameters_1.personalCredit.condition(income, age, location)) {
        loans.push(Parameters_1.personalCredit.credit);
    }
    if (Parameters_1.guaranteedCredit.condition(income, age, location)) {
        loans.push(Parameters_1.guaranteedCredit.credit);
    }
    if (Parameters_1.consignmentCredit.condition(income)) {
        loans.push(Parameters_1.consignmentCredit.credit);
    }
    return loans;
};
var calculateCredits = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var income, location, age, cpf, name, customer, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                income = data.income, location = data.location, age = data.age, cpf = data.cpf, name = data.name;
                return [4 /*yield*/, (0, CustomerServices_1.findByCpf)(cpf)];
            case 1:
                customer = _a.sent();
                if (customer.isFailure &&
                    customer.failure.failType != Failure_1.FailTypes.NotFound) {
                    return [2 /*return*/, Failure_1.Failure.From(customer.failure).toResultValue()];
                }
                if (!!customer.value) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, CustomerServices_1.saveCustomer)(data)];
            case 2:
                result = _a.sent();
                if (result.isFailure) {
                    return [2 /*return*/, result.toResultValue()];
                }
                _a.label = 3;
            case 3: return [2 /*return*/, Result_1.ResultValue.Ok({
                    customer: name,
                    loans: findAvailableCredits(income, age, location),
                })];
        }
    });
}); };
exports.calculateCredits = calculateCredits;
var requestNewLoan = function (model) { return __awaiter(void 0, void 0, void 0, function () {
    var customer, _a, income, age, location, loans, selectedLoan;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, CustomerServices_1.findByCpf)(model.cpf)];
            case 1:
                customer = _b.sent();
                if (customer.isFailure) {
                    return [2 /*return*/, Failure_1.Failure.From(customer.failure)];
                }
                if (!customer.value) {
                    return [2 /*return*/, Failure_1.Failure.NotFound("N\u00E3o foi encontrado cliente com o CPF ".concat(model.cpf, "."))];
                }
                _a = customer.value, income = _a.income, age = _a.age, location = _a.location;
                loans = findAvailableCredits(income, age, location);
                selectedLoan = loans.find(function (x) { return x.type == Credit_1.CreditTypesLabels[model.type]; });
                if (!selectedLoan) {
                    return [2 /*return*/, Failure_1.Failure.Forbidden('O cliente não está autorizado receber um empréstimo deste tipo.')];
                }
                return [4 /*yield*/, (0, loan_repository_1.createLoan)({
                        installmentsNumber: model.installmentsNumber,
                        amount: model.amount,
                        customerCpf: model.cpf,
                        interestRate: selectedLoan.interestRate,
                        type: selectedLoan.type,
                    })];
            case 2: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.requestNewLoan = requestNewLoan;
var deleteLoan = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, (0, loan_repository_1.deleteLoanById)(id)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.deleteLoan = deleteLoan;
var findCustomerLoans = function (cpf) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!cpf) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, loan_repository_1.findLoansByCpf)(cpf)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, (0, loan_repository_1.findAllLoans)()];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.findCustomerLoans = findCustomerLoans;
