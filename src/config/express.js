import productRouter from '#Routes/product.routes.js';
import cors from 'cors';
import express from 'express';

const expressApp = express();

// Middlewares
expressApp.use(express.json());
// Aplica el middleware de CORS
expressApp.use(cors());

// Routes
expressApp.use('/productos', productRouter);

export default expressApp;
