import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from '@/config/database';
import { startServer, configureServer } from './config/server';

dotenv.config();

// #region App
const app = express();
configureServer(app);
startServer(app, {
	port: process.env.PORT || 3000,
});
// #endregion

// #region Database
connectDatabase(process.env.MONGO_URI!);
// #endregion

export default app;
