import { getAppRoutes } from '@/services/RoutesServices';
import { Response, Request } from 'express';

const listRoutes = (req: Request, res: Response) => {
	const result = getAppRoutes(req.protocol, req.host);
	result.toResponse(res);
};

export { listRoutes };
