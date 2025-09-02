"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditTypesLabels = exports.CreditTypes = void 0;
var CreditTypes = {
    Personal: 0,
    Guaranteed: 1,
    Consignment: 2,
};
exports.CreditTypes = CreditTypes;
var CreditTypesLabels = (_a = {},
    _a[CreditTypes.Consignment] = 'CONSIGNMENT',
    _a[CreditTypes.Guaranteed] = 'GUARANTEED',
    _a[CreditTypes.Personal] = 'PERSONAL',
    _a);
exports.CreditTypesLabels = CreditTypesLabels;
