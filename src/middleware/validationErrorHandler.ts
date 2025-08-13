import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';

const validate = (
	req: Request,
	res: Response,
	next: NextFunction
): void | Response<any, Record<string, any>> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

export default validate;
