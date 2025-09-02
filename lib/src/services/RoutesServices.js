"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = exports.getAppRoutes = void 0;
var Result_1 = require("@/utils/ResultPattern/Result");
var Failure_1 = require("@/utils/ResultPattern/Failure");
var appRoutes = [];
exports.appRoutes = appRoutes;
var formatRoutes = function (stack, prefix) {
    var e_1, _a;
    if (prefix === void 0) { prefix = ''; }
    var routes = [];
    try {
        for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
            var middleware = stack_1_1.value;
            if (middleware.route) {
                var method = Object.keys(middleware.route.methods)
                    .join(',')
                    .toUpperCase();
                routes.push("".concat(method, " ").concat(prefix).concat(middleware.route.path));
            }
            else if (middleware.name === 'router' && middleware.handle.stack) {
                formatRoutes(middleware.handle.stack, prefix +
                    middleware.regexp.source
                        .replace('^\\', '')
                        .replace('\\/?(?=\\/|$)', '')
                        .replace('\\', '')
                        .replace('?$', ''));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return routes;
};
var getAppRoutes = function (protocol, host) {
    try {
        return Result_1.ResultValue.Ok({
            url: "".concat(protocol, "://").concat(host),
            routes: formatRoutes(appRoutes),
        });
    }
    catch (_a) {
        return Failure_1.Failure.InternalServer('Ocorreu um erro ao buscar as rotas da aplicação.').toResultValue();
    }
};
exports.getAppRoutes = getAppRoutes;
