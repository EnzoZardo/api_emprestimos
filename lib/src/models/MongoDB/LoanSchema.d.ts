import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}, {}, mongoose.DefaultSchemaOptions> & {
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    type: string;
    customerCpf: string;
    amount: number;
    installmentsNumber: number;
    interestRate: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
