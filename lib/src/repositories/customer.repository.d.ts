import { CustomerModel } from '@/models/Customer';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';
declare const findAllCustomers: () => Promise<ResultValue<CustomerModel[]>>;
declare const findCustomerByCpf: (cpf: string) => Promise<ResultValue<CustomerModel>>;
declare const createNewCustomer: (customer: CustomerModel) => Promise<ResultValue<CustomerModel>>;
declare const deleteCustomerByCpf: (cpf: string) => Promise<Result>;
export { deleteCustomerByCpf, createNewCustomer, findAllCustomers, findCustomerByCpf, };
