import express, { Express } from 'express';
import addRoutes from './routes';

interface ServerOptions {
	port: string | number;
}

const configureServer = (app: Express) => {
	app.use(express.json());
	addRoutes(app);
};

const startServer = (app: Express, options: ServerOptions): void => {
	const { port } = options;
	app.listen(port, (_) => {
		console.log(`Server is running on port ${port}`);
	});
};

export { startServer, configureServer };
