import mongoose from 'mongoose';

const connectDatabase = (uri: string) => {
	mongoose
		.connect(uri)
		.then(() => {
			console.log('Conectado ao MongoDB com sucesso!');
		})
		.catch((err) => {
			console.error('Erro ao conectar ao MongoDB:', err.message);
			process.exit(1);
		});
};

export default connectDatabase;
