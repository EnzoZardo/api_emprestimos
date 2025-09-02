"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var connectDatabase = function (uri) {
    mongoose_1.default
        .connect(uri)
        .then(function () {
        console.log('Conectado ao MongoDB com sucesso!');
    })
        .catch(function (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1);
    });
};
exports.default = connectDatabase;
