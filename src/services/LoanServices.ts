import { CustomerModel } from '@/models/Customer';
import {
	consignmentCredit,
	guaranteedCredit,
	personalCredit,
} from '@/parameters/Parameters.js';
import { findByCpf, saveCustomer } from '@/services/CustomerServices.js';

export const calculateCredits = (data: CustomerModel) => {
	const loans = [];
	const { income, location, age, cpf } = data;

	if (!findByCpf(cpf)) {
		saveCustomer(data);
	}

	if (personalCredit.condition(income, age, location)) {
		loans.push(personalCredit.credit);
	}

	if (guaranteedCredit.condition(income, age, location)) {
		loans.push(guaranteedCredit.credit);
	}

	if (consignmentCredit.condition(income)) {
		loans.push(consignmentCredit.credit);
	}

	return {
		customer: data.name,
		loans,
	};
};
