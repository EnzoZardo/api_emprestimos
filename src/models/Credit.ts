const CreditTypes = {
	Personal: 0,
	Guaranteed: 1,
	Consignment: 2,
} as const;

const CreditTypesLabels = {
	[CreditTypes.Consignment]: 'CONSIGNMENT',
	[CreditTypes.Guaranteed]: 'GUARANTEED',
	[CreditTypes.Personal]: 'PERSONAL',
} as const;

type CreditType = (typeof CreditTypes)[keyof typeof CreditTypes];

type Credit = {
	type: string;
	interestRate: number;
};

type CreditParameters = {
	condition: (...args: any[]) => boolean;
	credit: Credit;
};

export {
	type Credit,
	type CreditParameters,
	type CreditType,
	CreditTypes,
	CreditTypesLabels,
};
