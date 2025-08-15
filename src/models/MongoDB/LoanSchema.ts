import { RequiredNumber, RequiredString } from '@/utils/MongoDB/Defaults';
import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
		required: true,
	},
	customerCpf: RequiredString,
	amount: RequiredNumber,
	installmentsNumber: RequiredNumber,
	interestRate: RequiredNumber,
	type: RequiredString,
});

export default mongoose.model('Loan', LoanSchema);
