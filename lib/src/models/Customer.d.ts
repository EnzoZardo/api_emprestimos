type CustomerModel = {
    _id?: string;
    cpf: string;
    name: string;
    location: string;
    income: number;
    age: number;
};
declare const asMongoModel: (model: CustomerModel) => import("mongoose").Document<unknown, {}, {
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    age: number;
    location: string;
    income: number;
    cpf: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
};
export { type CustomerModel, asMongoModel };
