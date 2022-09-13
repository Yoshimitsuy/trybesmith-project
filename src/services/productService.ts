import IProduct from '../interfaces/IProduct';
import productModel from '../models/productModel';

async function createProduct(product: IProduct) {
  const data = await productModel.createProduct(product);

  return data;
}

export default { createProduct };