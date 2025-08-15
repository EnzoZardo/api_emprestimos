import { LoanGrantedModel } from '@/models/Loan';
import Loan from '@/models/MongoDB/LoanSchema';
import { Failure } from '@/utils/ResultPattern/Failure';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';

const ERROR_MESSAGE =
	'Ocorreu um erro ao buscar os dados no banco de dados. Tente novamente mais tarde!';

const findAllLoans = async (): Promise<ResultValue<LoanGrantedModel[]>> => {
	try {
		return ResultValue.Ok(await Loan.find().lean<LoanGrantedModel[]>());
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultValue();
	}
};

const findLoansByCpf = async (
	cpf: string
): Promise<ResultValue<LoanGrantedModel[]>> => {
	try {
		return ResultValue.Ok(
			await Loan.find({ customerCpf: cpf }).lean<LoanGrantedModel[]>()
		);
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultValue();
	}
};

const createLoan = async (loan: LoanGrantedModel): Promise<Result> => {
	try {
		await Loan.create(loan);
		return Result.Ok();
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE);
	}
};

const deleteLoanById = async (loanId: string): Promise<Result> => {
	try {
		await Loan.findByIdAndDelete(loanId);
		return Result.Ok();
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE);
	}
};

export { findAllLoans, findLoansByCpf, createLoan, deleteLoanById };
