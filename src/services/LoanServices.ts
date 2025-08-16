import { Credit, CreditTypesLabels } from '@/models/Credit';
import { CustomerModel } from '@/models/Customer';
import { LoanGrantedModel, LoanModel, LoanRequestModel } from '@/models/Loan';
import {
	consignmentCredit,
	guaranteedCredit,
	personalCredit,
} from '@/parameters/Parameters';
import {
	createLoan,
	deleteLoanById,
	findAllLoans,
	findLoansByCpf,
} from '@/repositories/loan.repository';
import { findByCpf, saveCustomer } from '@/services/CustomerServices';
import { FailTypes, Failure } from '@/utils/ResultPattern/Failure';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';

const findAvailableCredits = (
	income: number,
	age: number,
	location: string
): Credit[] => {
	const loans: Credit[] = [];
	if (personalCredit.condition(income, age, location)) {
		loans.push(personalCredit.credit);
	}

	if (guaranteedCredit.condition(income, age, location)) {
		loans.push(guaranteedCredit.credit);
	}

	if (consignmentCredit.condition(income)) {
		loans.push(consignmentCredit.credit);
	}

	return loans;
};

const calculateCredits = async (
	data: CustomerModel
): Promise<ResultValue<LoanModel>> => {
	const { income, location, age, cpf, name } = data;

	const customer = await findByCpf(cpf);

	if (
		customer.isFailure &&
		customer.failure!.failType != FailTypes.NotFound
	) {
		return Failure.From(customer.failure!).toResultValue();
	}

	if (!customer.value) {
		const result = await saveCustomer(data);
		if (result.isFailure) {
			return result.toResultValue();
		}
	}

	return ResultValue.Ok({
		customer: name,
		loans: findAvailableCredits(income, age, location),
	});
};

const requestNewLoan = async (model: LoanRequestModel): Promise<Result> => {
	const customer = await findByCpf(model.cpf);

	if (customer.isFailure) {
		return Failure.From(customer.failure!);
	}

	if (!customer.value) {
		return Failure.NotFound(
			`Não foi encontrado cliente com o CPF ${model.cpf}.`
		);
	}

	const { income, age, location } = customer.value;

	const loans = findAvailableCredits(income, age, location);

	const selectedLoan = loans.find(
		(x) => x.type == CreditTypesLabels[model.type]
	);
	if (!selectedLoan) {
		return Failure.Forbidden(
			'O cliente não está autorizado receber um empréstimo deste tipo.'
		);
	}

	return await createLoan({
		installmentsNumber: model.installmentsNumber,
		amount: model.amount,
		customerCpf: model.cpf,
		interestRate: selectedLoan.interestRate,
		type: selectedLoan.type,
	});
};

const deleteLoan = async (id: string): Promise<Result> =>
	await deleteLoanById(id);

const findCustomerLoans = async (
	cpf?: string
): Promise<ResultValue<LoanGrantedModel[]>> => {
	if (cpf) {
		return await findLoansByCpf(cpf);
	}

	return await findAllLoans();
};

export { calculateCredits, requestNewLoan, deleteLoan, findCustomerLoans };
