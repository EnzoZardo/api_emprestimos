"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultValue = exports.Result = exports.ResultBase = void 0;
var Failure_1 = require("@/utils/ResultPattern/Failure");
var ResultBase = /** @class */ (function () {
    function ResultBase() {
    }
    ResultBase.prototype.toResponse = function (res) {
        var _a;
        if (this.isSuccess &&
            (!this.value || Object.keys((_a = this.value) !== null && _a !== void 0 ? _a : {}).length == 0)) {
            return res.status(204).send();
        }
        if (this.isSuccess) {
            return res.status(200).json(this.value);
        }
        var failure = this.failure;
        return res
            .status(Failure_1.FailStatusCodes[failure.failType])
            .json({ message: failure.message });
    };
    return ResultBase;
}());
exports.ResultBase = ResultBase;
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result(isSuccess, value, failure) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.failure = failure;
        _this.isSuccess = isSuccess;
        _this.isFailure = !isSuccess;
        return _this;
    }
    Result.Ok = function (value) {
        if (value === void 0) { value = 'success'; }
        return new Result(true, value);
    };
    Result.Fail = function (value, failType) {
        if (value === void 0) { value = 'failure'; }
        if (failType === void 0) { failType = Failure_1.FailTypes.InternalServer; }
        return new Result(false, null, new Failure_1.Failure(value, failType));
    };
    Result.prototype.toResultValue = function () {
        if (this.isSuccess) {
            return ResultValue.Ok();
        }
        var _a = this.failure, message = _a.message, failType = _a.failType;
        return ResultValue.Fail(message, failType);
    };
    return Result;
}(ResultBase));
exports.Result = Result;
var ResultValue = /** @class */ (function (_super) {
    __extends(ResultValue, _super);
    function ResultValue(isSuccess, value, failure) {
        var _this = _super.call(this) || this;
        _this.failure = failure;
        _this.value = value;
        _this.isSuccess = isSuccess;
        _this.isFailure = !isSuccess;
        return _this;
    }
    ResultValue.Ok = function (value) {
        return new ResultValue(true, value);
    };
    ResultValue.Fail = function (message, failType) {
        if (message === void 0) { message = 'failure'; }
        if (failType === void 0) { failType = Failure_1.FailTypes.InternalServer; }
        return new ResultValue(false, null, new Failure_1.Failure(message, failType));
    };
    ResultValue.prototype.toResult = function () {
        if (this.isSuccess) {
            return Result.Ok();
        }
        var _a = this.failure, message = _a.message, failType = _a.failType;
        return Result.Fail(message, failType);
    };
    return ResultValue;
}(ResultBase));
exports.ResultValue = ResultValue;
