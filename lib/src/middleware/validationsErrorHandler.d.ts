import { NextFunction, Response, Request } from 'express';
declare const validate: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default validate;
