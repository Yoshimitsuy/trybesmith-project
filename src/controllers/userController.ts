import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/userService';
import IUser from '../interfaces/IUser';

const secret = 'secret';
// const JWT_CONFIG = { expiresIn: '10d', algorithm: 'HS256' };

async function createUser(req: Request, res: Response) {
  await userService.createUser(req.body);

  const { username } = req.body as IUser;

  const token = jwt.sign({ username }, secret, { expiresIn: '10d', algorithm: 'HS256' });

  return res.status(201).json({ token });
}

export default { createUser };