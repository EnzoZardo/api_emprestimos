import { CustomerModel } from '@/models/Customer';
import {
	createCustomer,
	findAllCustomers,
	findCustomerByCpf,
} from '@/repositories/customer.repository';
import { Failure } from '@/utils/ResultPattern/Failure';
import { Result, ResultT } from '@/utils/ResultPattern/Result';

export const saveCustomer = async (customer: CustomerModel): Promise<Result> =>
	(await createCustomer(customer)).toResult();

export const findByCpf = async (
	cpf: string
): Promise<ResultT<CustomerModel>> => {
	const customerResult = await findCustomerByCpf(cpf);

	if (!customerResult.value) {
		return Failure.NotFound(
			'Não foi encontrado nenhum cliente com o CPF informado.'
		).toResultT();
	}

	return customerResult;
};

export const findAll = async (): Promise<ResultT<CustomerModel[]>> =>
	await findAllCustomers();
