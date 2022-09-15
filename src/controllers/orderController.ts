import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function getAll(req: Request, res: Response) {
  const data = await orderService.getAll();

  return res.status(200).json(data);
}

export default { getAll };