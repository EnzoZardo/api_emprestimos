import { Credit, CreditType } from '@/models/Credit';

type LoanModel = {
	customer: string;
	loans: Credit[];
};

type LoanGrantedModel = {
	_id?: string;
	customer: string;
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

export type { LoanModel, LoanGrantedModel, LoanRequestModel };
