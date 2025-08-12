import express from 'express';
import loanRoutes from '@/routes/loan.routes.js';
import customerRoutes from '@/routes/customer.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', loanRoutes);
app.use('/', customerRoutes);

app.listen(port, () => {
	console.log(`Servidor Express rodando em http://localhost:${port}`);
});

export default app;
