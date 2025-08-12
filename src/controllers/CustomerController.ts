import { findAll } from '@/services/CustomerServices.js';
import { Request, Response } from 'express';

export const listCustomers = (_: Request, res: Response) => {
	const users = findAll();
	res.json(users);
};
