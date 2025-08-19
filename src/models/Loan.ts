import { Credit, CreditType } from '@/models/Credit';
import Loan from '@/models/MongoDB/LoanSchema';

type LoanModel = {
	customer: string;
	loans: Credit[];
};

type LoanGrantedModel = {
	_id?: string;
	customerCpf: string;
	amount: number;
	installmentsNumber: number;
	interestRate: number;
	type: string;
};

type LoanRequestModel = {
	cpf: string;
	amount: number;
	installmentsNumber: number;
	type: CreditType;
};

const asMongoModel = (model: LoanGrantedModel) =>
	new Loan({
		amount: model.amount,
		customerCpf: model.customerCpf,
		installmentsNumber: model.installmentsNumber,
		interestRate: model.interestRate,
		type: model.type,
	});

export {
	type LoanModel,
	type LoanGrantedModel,
	type LoanRequestModel,
	asMongoModel,
};
