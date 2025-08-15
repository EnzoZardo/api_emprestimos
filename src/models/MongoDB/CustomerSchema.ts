import { RequiredNumber, RequiredString } from '@/utils/MongoDB/Defaults';
import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
	cpf: { ...RequiredString, unique: true },
	name: RequiredString,
	location: RequiredString,
	income: RequiredNumber,
	age: RequiredNumber,
});

export default mongoose.model('Customer', CustomerSchema);
