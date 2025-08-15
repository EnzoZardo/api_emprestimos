import { CustomerModel } from '@/models/Customer';
import { LoanModel } from '@/models/Loan';
import {
	consignmentCredit,
	guaranteedCredit,
	personalCredit,
} from '@/parameters/Parameters';
import { findByCpf, saveCustomer } from '@/services/CustomerServices';
import { Failure } from '@/utils/ResultPattern/Failure';
import { ResultValue } from '@/utils/ResultPattern/Result';

const calculateCredits = async (
	data: CustomerModel
): Promise<ResultValue<LoanModel>> => {
	const loans = [];
	const { income, location, age, cpf } = data;

	const customer = await findByCpf(cpf);

	if (customer.isFailure) {
		return Failure.From(customer.failure!).toResultValue();
	}

	if (customer.isSuccess && !customer.value) {
		const result = await saveCustomer(data);
		if (result.isFailure) {
			return result.toResultValue();
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

	return ResultValue.Ok({
		customer: data.name,
		loans,
	});
};

export { calculateCredits };
