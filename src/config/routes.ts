import customerRoutes from '@/routes/customer.routes';
import loanRoutes from '@/routes/loan.routes';
import { Express } from 'express';

const addRoutes = (app: Express): void => {
	app.use('/', loanRoutes);
	app.use('/', customerRoutes);
};

export default addRoutes;
