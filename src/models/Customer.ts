import Customer from '@/models/MongoDB/CustomerSchema';

type CustomerModel = {
	_id?: string;
	cpf: string;
	name: string;
	location: string;
	income: number;
	age: number;
};

const asMongoModel = (model: CustomerModel) =>
	new Customer({
		age: model.age,
		cpf: model.cpf,
		income: model.income,
		location: model.location,
		name: model.name,
	});

export { type CustomerModel, asMongoModel };
