import { CustomerModel } from '@/models/Customer';
import {
	createNewCustomer,
	deleteCustomerByCpf,
	findAllCustomers,
	findCustomerByCpf,
} from '@/repositories/customer.repository';
import { Failure } from '@/utils/ResultPattern/Failure';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';

const saveCustomer = async (customer: CustomerModel): Promise<Result> => {
	const customerResult = await findCustomerByCpf(customer.cpf);

	if (customerResult.value) {
		return Failure.Forbidden(
			`Não é possível criar o cliente, pois o CPF ${customer.cpf} já está em uso.`
		);
	}

	return (await createNewCustomer(customer)).toResult();
};

const findByCpf = async (cpf: string): Promise<ResultValue<CustomerModel>> => {
	const customerResult = await findCustomerByCpf(cpf);

	if (!customerResult.value) {
		return Failure.NotFound(
			'Não foi encontrado nenhum cliente com o CPF informado.'
		).toResultValue();
	}

	return customerResult;
};

const findAll = async (): Promise<ResultValue<CustomerModel[]>> =>
	await findAllCustomers();

const deleteByCpf = async (cpf: string): Promise<Result> => {
	const customerResult = await findCustomerByCpf(cpf);

	if (!customerResult.value) {
		return Failure.NotFound(
			'Não foi encontrado nenhum cliente com o CPF informado.'
		);
	}

	return await deleteCustomerByCpf(cpf);
};

export { findAll, findByCpf, saveCustomer, deleteByCpf };
