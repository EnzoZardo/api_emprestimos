import { RequiredNumber, RequiredString } from '@/utils/MongoDB/Defaults';
import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
	customerCpf: RequiredString,
	amount: RequiredNumber,
	installmentsNumber: RequiredNumber,
	interestRate: RequiredNumber,
	type: RequiredString,
});

export default mongoose.model('Loan', LoanSchema);
