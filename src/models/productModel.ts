import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/IProduct';

async function createProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, values);

  const newProduct = { id, name, amount };

  return newProduct;
}

async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [data] = await connection.execute(query);

  return data as IProduct[];
}

export default { createProduct, getAll };