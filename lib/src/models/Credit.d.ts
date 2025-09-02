declare const CreditTypes: {
    readonly Personal: 0;
    readonly Guaranteed: 1;
    readonly Consignment: 2;
};
declare const CreditTypesLabels: {
    readonly 2: "CONSIGNMENT";
    readonly 1: "GUARANTEED";
    readonly 0: "PERSONAL";
};
type CreditType = (typeof CreditTypes)[keyof typeof CreditTypes];
type Credit = {
    type: string;
    interestRate: number;
};
type CreditParameters = {
    condition: (...args: any[]) => boolean;
    credit: Credit;
};
export { type Credit, type CreditParameters, type CreditType, CreditTypes, CreditTypesLabels, };
