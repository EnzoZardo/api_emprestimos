import { Request, Response } from 'express';
import { calculateCredits } from '@/services/LoanServices';

export const listCredits = (req: Request, res: Response) => {
	const credits = calculateCredits(req.body);
	res.json(credits);
};
