import userRouter from '#Routes/user.routes.js';
import cors from 'cors';
import express from 'express';

const expressApp = express();

// Middlewares
expressApp.use(express.json());
// Aplica el middleware de CORS
expressApp.use(cors());

// Routes
expressApp.use('/usuarios', userRouter);

export default expressApp;
