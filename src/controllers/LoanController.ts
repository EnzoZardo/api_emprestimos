import { Request, Response } from 'express';
import {
	calculateCredits,
	deleteLoan,
	findCustomerLoans,
	requestNewLoan,
} from '@/services/LoanServices';
import { findAllLoans } from '@/repositories/loan.repository';

const listCredits = async (req: Request, res: Response) => {
	const credits = await calculateCredits(req.body);
	credits.toResponse(res);
};

const createCustomerLoan = async (req: Request, res: Response) => {
	const result = await requestNewLoan(req.body);
	result.toResponse(res);
};

const deleteCustomerLoan = async (req: Request, res: Response) => {
	const result = await deleteLoan(req.params.id);
	result.toResponse(res);
};

const listCustomerLoans = async (req: Request, res: Response) => {
	const result = await findCustomerLoans(req.params.cpf);
	result.toResponse(res);
};

const listLoans = async (req: Request, res: Response) => {
	const result = await findAllLoans();
	result.toResponse(res);
};

export {
	listCredits,
	deleteCustomerLoan,
	createCustomerLoan,
	listCustomerLoans,
	listLoans,
};
