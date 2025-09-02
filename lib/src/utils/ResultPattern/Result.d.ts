import { FailType, Failure } from '@/utils/ResultPattern/Failure';
import { Response } from 'express';
declare class ResultBase<TValue> {
    value: TValue | null | undefined;
    failure: Failure | null | undefined;
    isSuccess: boolean | undefined;
    isFailure: boolean | undefined;
    toResponse(res: Response): Response;
}
declare class Result extends ResultBase<string> {
    constructor(isSuccess: boolean, value?: string | null, failure?: Failure | null);
    static Ok(value?: string): Result;
    static Fail(value?: string, failType?: FailType): Result;
    toResultValue<TReturn>(): ResultValue<TReturn>;
}
declare class ResultValue<TResult> extends ResultBase<TResult> {
    constructor(isSuccess: boolean, value?: TResult | null, failure?: Failure | null);
    static Ok<T>(value?: T): ResultValue<T>;
    static Fail<T>(message?: string, failType?: FailType): ResultValue<T>;
    toResult(): Result;
}
export { ResultBase, Result, ResultValue };
