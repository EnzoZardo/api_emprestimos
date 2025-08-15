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
		interest_rate: 4,
	},
});

const guaranteedCredit: CreditParameters = Object.freeze({
	condition: (income: number, age: number, location: string) =>
		income <= 3000 ||
		(income > 3000 && income < 5000 && age < 30 && location == 'RS'),
	credit: {
		type: CreditTypesLabels[CreditTypes.Guaranteed],
		interest_rate: 3,
	},
});

const consignmentCredit: CreditParameters = Object.freeze({
	condition: (income: number) => income >= 5000,
	credit: {
		type: CreditTypesLabels[CreditTypes.Consignment],
		interest_rate: 2,
	},
});

export { consignmentCredit, guaranteedCredit, personalCredit };
