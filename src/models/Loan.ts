type Credit = {
	type: 'PERSONAL' | 'GUARANTEED' | 'CONSIGNMENT';
	interest_rate: number;
};

type CreditParameters = {
	condition: (...args: any[]) => boolean;
	credit: Credit;
};

type LoanModel = {
	customer: string;
};

export type { LoanModel, Credit, CreditParameters };
