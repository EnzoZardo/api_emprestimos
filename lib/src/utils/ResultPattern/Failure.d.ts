import { Result } from '@/utils/ResultPattern/Result';
declare const FailTypes: {
    readonly InternalServer: 0;
    readonly BadRequest: 1;
    readonly NotFound: 2;
    readonly Forbidden: 3;
};
declare const FailStatusCodes: {
    readonly 0: 500;
    readonly 1: 400;
    readonly 3: 403;
    readonly 2: 404;
};
type FailType = (typeof FailTypes)[keyof typeof FailTypes];
declare class Failure {
    failType: FailType | undefined;
    message: string | undefined;
    constructor(message: string, failType: FailType);
    static From(failure: Failure): Result;
    static InternalServer(message?: string): Result;
    static NotFound(message?: string): Result;
    static Forbidden(message?: string): Result;
    static BadRequest(message?: string): Result;
}
export { Failure, FailTypes, FailStatusCodes, type FailType };
