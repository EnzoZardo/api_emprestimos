import { CustomerModel } from '@/models/Customer';
import Customer from '@/models/MongoDB/CustomerSchema';
import { Failure } from '@/utils/ResultPattern/Failure';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';

const ERROR_MESSAGE =
	'Ocorreu um erro ao buscar os dados no banco de dados. Tente novameente mais tarde!';

const findAllCustomers = async (): Promise<ResultValue<CustomerModel[]>> => {
	try {
		return ResultValue.Ok(await Customer.find().lean<CustomerModel[]>());
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultValue();
	}
};

const findCustomerByCpf = async (
	cpf: string
): Promise<ResultValue<CustomerModel>> => {
	try {
		return ResultValue.Ok(
			(await Customer.find({ cpf }).lean<CustomerModel[]>())[0]
		);
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultValue();
	}
};

const createNewCustomer = async (
	customer: CustomerModel
): Promise<ResultValue<CustomerModel>> => {
	try {
		return ResultValue.Ok(
			(await Customer.create(customer)).toObject<CustomerModel>()
		);
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultValue();
	}
};

const deleteCustomerByCpf = async (cpf: string): Promise<Result> => {
	try {
		await Customer.deleteOne({ cpf });
		return Result.Ok();
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE);
	}
};

export {
	deleteCustomerByCpf,
	createNewCustomer,
	findAllCustomers,
	findCustomerByCpf,
};
