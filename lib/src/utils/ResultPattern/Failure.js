"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailStatusCodes = exports.FailTypes = exports.Failure = void 0;
var Result_1 = require("@/utils/ResultPattern/Result");
var FailTypes = {
    InternalServer: 0,
    BadRequest: 1,
    NotFound: 2,
    Forbidden: 3,
};
exports.FailTypes = FailTypes;
var FailStatusCodes = (_a = {},
    _a[FailTypes.InternalServer] = 500,
    _a[FailTypes.BadRequest] = 400,
    _a[FailTypes.Forbidden] = 403,
    _a[FailTypes.NotFound] = 404,
    _a);
exports.FailStatusCodes = FailStatusCodes;
var Failure = /** @class */ (function () {
    function Failure(message, failType) {
        this.message = message;
        this.failType = failType;
    }
    Failure.From = function (failure) {
        return Result_1.Result.Fail(failure.message, failure.failType);
    };
    Failure.InternalServer = function (message) {
        if (message === void 0) { message = 'failure'; }
        return Result_1.Result.Fail(message, FailTypes.InternalServer);
    };
    Failure.NotFound = function (message) {
        if (message === void 0) { message = 'failure'; }
        return Result_1.Result.Fail(message, FailTypes.NotFound);
    };
    Failure.Forbidden = function (message) {
        if (message === void 0) { message = 'failure'; }
        return Result_1.Result.Fail(message, FailTypes.Forbidden);
    };
    Failure.BadRequest = function (message) {
        if (message === void 0) { message = 'failure'; }
        return Result_1.Result.Fail(message, FailTypes.BadRequest);
    };
    return Failure;
}());
exports.Failure = Failure;
