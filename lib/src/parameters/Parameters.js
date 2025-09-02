"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalCredit = exports.guaranteedCredit = exports.consignmentCredit = void 0;
var Credit_1 = require("@/models/Credit");
var personalCredit = Object.freeze({
    condition: function (income, age, location) {
        return income < 3000 ||
            (income > 3000 && income < 5000 && age < 30 && location == 'RS');
    },
    credit: {
        type: Credit_1.CreditTypesLabels[Credit_1.CreditTypes.Personal],
        interestRate: 4,
    },
});
exports.personalCredit = personalCredit;
var guaranteedCredit = Object.freeze({
    condition: function (income, age, location) {
        return income <= 3000 ||
            (income > 3000 && income < 5000 && age < 30 && location == 'RS');
    },
    credit: {
        type: Credit_1.CreditTypesLabels[Credit_1.CreditTypes.Guaranteed],
        interestRate: 3,
    },
});
exports.guaranteedCredit = guaranteedCredit;
var consignmentCredit = Object.freeze({
    condition: function (income) { return income >= 5000; },
    credit: {
        type: Credit_1.CreditTypesLabels[Credit_1.CreditTypes.Consignment],
        interestRate: 2,
    },
});
exports.consignmentCredit = consignmentCredit;
