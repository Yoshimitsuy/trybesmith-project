import { RowDataPacket } from 'mysql2';
import orderModel from '../models/orderModel';

async function getAll(): Promise<RowDataPacket[]> {
  const data = await orderModel.getAll();

  return data;
}

export default { getAll };