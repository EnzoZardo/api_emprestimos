import { CustomerModel } from '@/models/Customer';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';
declare const saveCustomer: (customer: CustomerModel) => Promise<Result>;
declare const findByCpf: (cpf: string) => Promise<ResultValue<CustomerModel>>;
declare const findAll: () => Promise<ResultValue<CustomerModel[]>>;
declare const deleteByCpf: (cpf: string) => Promise<Result>;
export { findAll, findByCpf, saveCustomer, deleteByCpf };
