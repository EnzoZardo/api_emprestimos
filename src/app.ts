import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from '@/config/database';
import { startServer, configureServer } from './config/server';

dotenv.config();

// #region App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configureServer(app);
startServer(app, {
	port: process.env.PORT || 3000,
});
// #endregion

// #region Database
connectDatabase(process.env.MONGO_URI!);
// #endregion

// #region EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
    res.render('index');
});
// #endregion

export default app;
