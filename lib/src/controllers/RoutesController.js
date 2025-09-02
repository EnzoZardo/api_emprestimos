"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRoutes = void 0;
var RoutesServices_1 = require("@/services/RoutesServices");
var listRoutes = function (req, res) {
    var result = (0, RoutesServices_1.getAppRoutes)(req.protocol, req.host);
    result.toResponse(res);
};
exports.listRoutes = listRoutes;
