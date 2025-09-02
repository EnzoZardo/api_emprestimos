"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMongoModel = void 0;
var CustomerSchema_1 = __importDefault(require("@/models/MongoDB/CustomerSchema"));
var asMongoModel = function (model) {
    return new CustomerSchema_1.default({
        age: model.age,
        cpf: model.cpf,
        income: model.income,
        location: model.location,
        name: model.name,
    });
};
exports.asMongoModel = asMongoModel;
