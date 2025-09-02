"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_1 = __importDefault(require("@/config/database"));
var server_1 = require("./config/server");
dotenv_1.default.config();
// #region App
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, server_1.configureServer)(app);
(0, server_1.startServer)(app, {
    port: process.env.PORT || 3000,
});
// #endregion
// #region Database
(0, database_1.default)(process.env.MONGO_URI);
// #endregion
// #region EJS
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', function (_req, res) {
    res.render('index');
});
// #endregion
exports.default = app;
