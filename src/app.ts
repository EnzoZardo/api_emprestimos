import express from 'express';
import loanRoutes from '@/routes/loan.routes.js';
import customerRoutes from '@/routes/customer.routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', loanRoutes);
app.use('/', customerRoutes);

app.listen(port, () => {
	console.log(`Servidor Express rodando em http://localhost:${port}`);
});

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI: string | undefined = process.env.MONGO_URI;
mongoose
	.connect(MONGO_URI!)
	.then(() => {
		console.log('Conectado ao MongoDB com sucesso!');
	})
	.catch((err) => {
		console.error('Erro ao conectar ao MongoDB:', err.message);
		process.exit(1); // Encerra o processo se a conexão falhar
	});

export default app;
