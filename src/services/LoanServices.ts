import { CustomerModel } from '@/models/Customer';
import { LoanModel } from '@/models/Loan';
import {
	consignmentCredit,
	guaranteedCredit,
	personalCredit,
} from '@/parameters/Parameters.js';
import { findByCpf, saveCustomer } from '@/services/CustomerServices.js';
import { Failure } from '@/utils/ResultPattern/Failure';
import { ResultT } from '@/utils/ResultPattern/Result';

export const calculateCredits = async (
	data: CustomerModel
): Promise<ResultT<LoanModel>> => {
	const loans = [];
	const { income, location, age, cpf } = data;

	const customer = await findByCpf(cpf);

	if (customer.isFailure) {
		return Failure.From(customer.failure!).toResultT();
	}

	if (customer.isSuccess && !customer.value) {
		const result = await saveCustomer(data);

		if (result.isFailure) {
			return result.toResultT();
		}
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

	return ResultT.Ok({
		customer: data.name,
		loans,
	});
};
