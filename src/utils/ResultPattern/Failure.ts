import { Result } from '@/utils/ResultPattern/Result';

const FailTypes = {
	InternalServer: 0,
	BadRequest: 1,
	NotFound: 2,
} as const;

const FailStatusCodes = {
	[FailTypes.InternalServer]: 500,
	[FailTypes.BadRequest]: 400,
	[FailTypes.NotFound]: 404,
} as const;

type FailType = (typeof FailTypes)[keyof typeof FailTypes];

class Failure {
	public failType: FailType | undefined;
	public message: string | undefined;

	constructor(message: string, failType: FailType) {
		this.message = message;
		this.failType = failType;
	}

	public static From(failure: Failure): Result {
		return Result.Fail(failure.message, failure.failType);
	}

	public static InternalServer(message: string = 'failure'): Result {
		return Result.Fail(message, FailTypes.InternalServer);
	}

	public static NotFound(message: string = 'failure'): Result {
		return Result.Fail(message, FailTypes.NotFound);
	}

	public static BadRequest(message: string = 'failure'): Result {
		return Result.Fail(message, FailTypes.BadRequest);
	}
}

export { Failure, FailTypes, FailStatusCodes, type FailType };
