import { CustomerModel } from '@/models/Customer';

const customers: CustomerModel[] = [];

export const saveCustomer = (customer: CustomerModel): void => {
	customers.push(customer);
};

export const findByCpf = (cpf: string): boolean => {
	return !!customers.find((x) => cpf == x.cpf);
};

export const findAll = (): CustomerModel[] => {
	return customers;
};
