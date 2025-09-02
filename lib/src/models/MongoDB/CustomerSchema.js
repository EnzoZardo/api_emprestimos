"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Defaults_1 = require("@/utils/MongoDB/Defaults");
var mongoose_1 = __importDefault(require("mongoose"));
var CustomerSchema = new mongoose_1.default.Schema({
    cpf: __assign(__assign({}, Defaults_1.RequiredString), { unique: true }),
    name: Defaults_1.RequiredString,
    location: Defaults_1.RequiredString,
    income: Defaults_1.RequiredNumber,
    age: Defaults_1.RequiredNumber,
});
exports.default = mongoose_1.default.model('Customer', CustomerSchema);
