import {
	FailStatusCodes,
	FailType,
	FailTypes,
	Failure,
} from '@/utils/ResultPattern/Failure';
import { Response } from 'express';

class ResultBase<TValue> {
	public value: TValue | null | undefined;
	public failure: Failure | null | undefined;
	public isSuccess: boolean | undefined;
	public isFailure: boolean | undefined;

	public toResponse(res: Response): Response {
		if (
			this.isSuccess &&
			(!this.value || Object.keys(this.value ?? {}).length == 0)
		) {
			return res.status(204).send();
		}

		if (this.isSuccess) {
			return res.status(200).json(this.value);
		}

		const failure = this.failure!;
		return res
			.status(FailStatusCodes[failure.failType!])
			.json({ message: failure.message });
	}
}

class Result extends ResultBase<string> {
	constructor(
		isSuccess: boolean,
		value?: string | null,
		failure?: Failure | null
	) {
		super();
		this.value = value;
		this.failure = failure;
		this.isSuccess = isSuccess;
		this.isFailure = !isSuccess;
	}

	public static Ok(value: string = 'success'): Result {
		return new Result(true, value);
	}

	public static Fail(
		value: string = 'failure',
		failType: FailType = FailTypes.InternalServer
	): Result {
		return new Result(false, null, new Failure(value, failType));
	}

	public toResultValue<TReturn>(): ResultValue<TReturn> {
		if (this.isSuccess) {
			return ResultValue.Ok();
		}
		const { message, failType } = this.failure!;
		return ResultValue.Fail(message, failType);
	}
}

class ResultValue<TResult> extends ResultBase<TResult> {
	constructor(
		isSuccess: boolean,
		value?: TResult | null,
		failure?: Failure | null
	) {
		super();
		this.failure = failure;
		this.value = value as TResult;
		this.isSuccess = isSuccess;
		this.isFailure = !isSuccess;
	}

	public static Ok<T>(value?: T): ResultValue<T> {
		return new ResultValue(true, value);
	}

	public static Fail<T>(
		message: string = 'failure',
		failType: FailType = FailTypes.InternalServer
	): ResultValue<T> {
		return new ResultValue<T>(false, null, new Failure(message, failType));
	}

	public toResult(): Result {
		if (this.isSuccess) {
			return Result.Ok();
		}
		const { message, failType } = this.failure!;
		return Result.Fail(message, failType);
	}
}

export { ResultBase, Result, ResultValue };
