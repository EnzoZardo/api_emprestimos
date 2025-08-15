import customerRoutes from '@/routes/customer.routes';
import loanRoutes from '@/routes/loan.routes';
import routerRoutes from '@/routes/router.routes';
import { appRoutes } from '@/services/RoutesServices';
import { Express } from 'express';

const addRoutes = (app: Express): void => {
	app.use('/', loanRoutes);
	app.use('/', customerRoutes);
	app.use('/', routerRoutes);
	appRoutes.push(
		...loanRoutes.stack,
		...customerRoutes.stack,
		...routerRoutes.stack
	);
};

export default addRoutes;
