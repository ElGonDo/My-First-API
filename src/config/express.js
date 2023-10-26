import productRouter from '#Routes/product.routes.js';
import express from 'express';

const expressApp = express();

// Middlewares
expressApp.use(express.json());

// Routes
expressApp.use('/productos', productRouter);

export default expressApp;
