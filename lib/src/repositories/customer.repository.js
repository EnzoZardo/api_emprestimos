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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCustomerByCpf = exports.findAllCustomers = exports.createNewCustomer = exports.deleteCustomerByCpf = void 0;
var CustomerSchema_1 = __importDefault(require("@/models/MongoDB/CustomerSchema"));
var Customer_1 = require("@/models/Customer");
var Failure_1 = require("@/utils/ResultPattern/Failure");
var Result_1 = require("@/utils/ResultPattern/Result");
var ERROR_MESSAGE = 'Ocorreu um erro ao buscar os dados no banco de dados. Tente novamente mais tarde!';
var findAllCustomers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _b = (_a = Result_1.ResultValue).Ok;
                return [4 /*yield*/, CustomerSchema_1.default.find().lean()];
            case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
            case 2:
                _c = _d.sent();
                return [2 /*return*/, Failure_1.Failure.InternalServer(ERROR_MESSAGE).toResultValue()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findAllCustomers = findAllCustomers;
var findCustomerByCpf = function (cpf) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _b = (_a = Result_1.ResultValue).Ok;
                return [4 /*yield*/, CustomerSchema_1.default.find({ cpf: cpf }).lean()];
            case 1: return [2 /*return*/, _b.apply(_a, [(_d.sent())[0]])];
            case 2:
                _c = _d.sent();
                return [2 /*return*/, Failure_1.Failure.InternalServer(ERROR_MESSAGE).toResultValue()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findCustomerByCpf = findCustomerByCpf;
var createNewCustomer = function (customer) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _b = (_a = Result_1.ResultValue).Ok;
                return [4 /*yield*/, CustomerSchema_1.default.create((0, Customer_1.asMongoModel)(customer))];
            case 1: return [2 /*return*/, _b.apply(_a, [(_d.sent()).toObject()])];
            case 2:
                _c = _d.sent();
                return [2 /*return*/, Failure_1.Failure.InternalServer(ERROR_MESSAGE).toResultValue()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createNewCustomer = createNewCustomer;
var deleteCustomerByCpf = function (cpf) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, CustomerSchema_1.default.deleteOne({ cpf: cpf })];
            case 1:
                _b.sent();
                return [2 /*return*/, Result_1.Result.Ok()];
            case 2:
                _a = _b.sent();
                return [2 /*return*/, Failure_1.Failure.InternalServer(ERROR_MESSAGE)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCustomerByCpf = deleteCustomerByCpf;
