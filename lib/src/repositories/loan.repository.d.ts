import { LoanGrantedModel } from '@/models/Loan';
import { Result, ResultValue } from '@/utils/ResultPattern/Result';
declare const findAllLoans: () => Promise<ResultValue<LoanGrantedModel[]>>;
declare const findLoansByCpf: (cpf: string) => Promise<ResultValue<LoanGrantedModel[]>>;
declare const createLoan: (loan: LoanGrantedModel) => Promise<Result>;
declare const deleteLoanById: (loanId: string) => Promise<Result>;
declare const deleteLoansByCpf: (cpf: string) => Promise<Result>;
export { findAllLoans, findLoansByCpf, createLoan, deleteLoanById, deleteLoansByCpf, };
