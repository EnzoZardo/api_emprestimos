import { findAll, findByCpf } from '@/services/CustomerServices.js';
import { Request, Response } from 'express';

export const listCustomers = async (_: Request, res: Response) => {
	const users = await findAll();
	users.toResponse(res);
};

export const findCustomer = async (req: Request, res: Response) => {
	const users = await findByCpf(req.params.cpf);
	users.toResponse(res);
};
