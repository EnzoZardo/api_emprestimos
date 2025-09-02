import { Request, Response } from 'express';
import {
	calculateCredits,
	deleteLoan,
	findCustomerLoans,
	requestNewLoan,
} from '@/services/LoanServices';
import { findAllLoans as findLoans } from '@/repositories/loan.repository';

const listCredits = async (req: Request, res: Response) => {
	const credits = await calculateCredits(req.body);
	if (credits.isFailure) {
    if (req.accepts("html")) {
      return res.status(400).render("result", {
        customer: req.body?.name ?? "",
        loans: [],
        error: credits.failure?.message ?? "Não foi possível calcular os créditos."
      });
    }

    return res.status(400).json({
      success: false,
      error: credits.failure?.message ?? "Não foi possível calcular os créditos."
    });
  }

  const { customer, loans } = credits.value;

  if (req.accepts("html")) {
    return res.render("result", { customer, loans });
  }

  return res.json({
    success: true,
    customer,
    loans
  });
};

const createCustomerLoan = async (req: Request, res: Response) => {
	const result = await requestNewLoan(req.body);
	result.toResponse(res);
};

const deleteCustomerLoan = async (req: Request, res: Response) => {
	const result = await deleteLoan(req.params.id);
	result.toResponse(res);
};

const listLoans = async (req: Request, res: Response) => {
	const result = await findCustomerLoans(req.query.cpf as string | undefined);
	result.toResponse(res);
};

export { listCredits, deleteCustomerLoan, createCustomerLoan, listLoans };
