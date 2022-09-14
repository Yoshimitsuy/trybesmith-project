import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);

app.get('/products', productController.getAll);

app.post('/users', userController.createUser);

export default app;
