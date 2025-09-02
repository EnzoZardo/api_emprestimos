import { Credit, CreditType } from '@/models/Credit';
type LoanModel = {
    customer: string;
    loans: Credit[];
};
type LoanGrantedModel = {
    _id?: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
    type: string;
};
type LoanRequestModel = {
    cpf: string;
    amount: number;
    installmentsNumber: number;
    type: CreditType;
};
declare const asMongoModel: (model: LoanGrantedModel) => import("mongoose").Document<unknown, {}, {
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
};
export { type LoanModel, type LoanGrantedModel, type LoanRequestModel, asMongoModel, };
