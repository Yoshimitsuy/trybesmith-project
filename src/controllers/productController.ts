import { Request, Response } from 'express';
import IProduct from '../interfaces/IProduct';
import productService from '../services/productService';

async function createProduct(req: Request, res: Response) {
  const product = req.body as IProduct;

  const result = await productService.createProduct(product);

  return res.status(201).json(result);
}

export default { createProduct };