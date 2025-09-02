import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
