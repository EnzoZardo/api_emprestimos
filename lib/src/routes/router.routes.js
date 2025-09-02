"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoutesController_1 = require("@/controllers/RoutesController");
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/rotas', RoutesController_1.listRoutes);
exports.default = router;
