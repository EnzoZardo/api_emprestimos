import {
	CreditParameters,
	CreditTypes,
	CreditTypesLabels,
} from '@/models/Credit';

const personalCredit: CreditParameters = Object.freeze({
	condition: (income: number, age: number, location: string) =>
		income < 3000 ||
		(income > 3000 && income < 5000 && age < 30 && location == 'RS'),
	credit: {
		type: CreditTypesLabels[CreditTypes.Personal],
		interestRate: 4,
	},
});

const guaranteedCredit: CreditParameters = Object.freeze({
	condition: (income: number, age: number, location: string) =>
		income <= 3000 ||
		(income > 3000 && income < 5000 && age < 30 && location == 'RS'),
	credit: {
		type: CreditTypesLabels[CreditTypes.Guaranteed],
		interestRate: 3,
	},
});

const consignmentCredit: CreditParameters = Object.freeze({
	condition: (income: number) => income >= 5000,
	credit: {
		type: CreditTypesLabels[CreditTypes.Consignment],
		interestRate: 2,
	},
});

export { consignmentCredit, guaranteedCredit, personalCredit };
