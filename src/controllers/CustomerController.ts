import {
	deleteByCpf,
	findAll,
	findByCpf,
	saveCustomer,
} from '@/services/CustomerServices';
import { Request, Response } from 'express';

const listCustomers = async (_: Request, res: Response) => {
	const users = await findAll();
	users.toResponse(res);
};

const findCustomer = async (req: Request, res: Response) => {
	const users = await findByCpf(req.params.cpf);
	users.toResponse(res);
};

const createCustomer = async (req: Request, res: Response) => {
	const result = await saveCustomer(req.body);
	result.toResponse(res);
};

const deleteCustomer = async (req: Request, res: Response) => {
	const result = await deleteByCpf(req.params.cpf);
	result.toResponse(res);
};

export { findCustomer, listCustomers, deleteCustomer, createCustomer };
