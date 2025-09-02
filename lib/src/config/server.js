"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureServer = exports.startServer = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var configureServer = function (app) {
    app.use(express_1.default.json());
    (0, routes_1.default)(app);
};
exports.configureServer = configureServer;
var startServer = function (app, options) {
    var port = options.port;
    app.listen(port, function (_) {
        console.log("Server is running on port ".concat(port));
    });
};
exports.startServer = startServer;
