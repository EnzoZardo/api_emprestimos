import { Request, Response } from 'express';
import { calculateCredits } from '@/services/LoanServices';

const listCredits = async (req: Request, res: Response) => {
	const credits = await calculateCredits(req.body);
	credits.toResponse(res);
};

export { listCredits };
