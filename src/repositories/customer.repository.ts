import { CustomerModel } from '@/models/Customer';
import Customer from '@/models/MongoDB/CustomerSchema';
import { Failure } from '@/utils/ResultPattern/Failure';
import { ResultT } from '@/utils/ResultPattern/Result';

const ERROR_MESSAGE =
	'Ocorreu um erro ao buscar os dados no banco de dados. Tente novameente mais tarde!';

export const findAllCustomers = async (): Promise<ResultT<CustomerModel[]>> => {
	try {
		return ResultT.Ok(await Customer.find().lean<CustomerModel[]>());
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultT();
	}
};

export const findCustomerByCpf = async (
	cpf: string
): Promise<ResultT<CustomerModel>> => {
	try {
		return ResultT.Ok(
			(await Customer.find({ cpf }).lean<CustomerModel[]>())[0]
		);
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultT();
	}
};

export const createCustomer = async (
	customer: CustomerModel
): Promise<ResultT<CustomerModel>> => {
	try {
		return ResultT.Ok(
			(await Customer.create(customer)).toObject<CustomerModel>()
		);
	} catch {
		return Failure.InternalServer(ERROR_MESSAGE).toResultT();
	}
};
