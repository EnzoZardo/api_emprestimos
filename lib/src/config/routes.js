"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_routes_1 = __importDefault(require("@/routes/customer.routes"));
var loan_routes_1 = __importDefault(require("@/routes/loan.routes"));
var router_routes_1 = __importDefault(require("@/routes/router.routes"));
var RoutesServices_1 = require("@/services/RoutesServices");
var addRoutes = function (app) {
    app.use('/', loan_routes_1.default);
    app.use('/', customer_routes_1.default);
    app.use('/', router_routes_1.default);
    RoutesServices_1.appRoutes.push.apply(RoutesServices_1.appRoutes, __spreadArray(__spreadArray(__spreadArray([], __read(loan_routes_1.default.stack), false), __read(customer_routes_1.default.stack), false), __read(router_routes_1.default.stack), false));
};
exports.default = addRoutes;
