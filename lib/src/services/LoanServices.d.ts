import { CustomerModel } from '@/models/Customer';
import { LoanGrantedModel, LoanModel, LoanRequestModel } from '@/models/Loan';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';
declare const calculateCredits: (data: CustomerModel) => Promise<ResultValue<LoanModel>>;
declare const requestNewLoan: (model: LoanRequestModel) => Promise<Result>;
declare const deleteLoan: (id: string) => Promise<Result>;
declare const findCustomerLoans: (cpf?: string) => Promise<ResultValue<LoanGrantedModel[]>>;
export { calculateCredits, requestNewLoan, deleteLoan, findCustomerLoans };
