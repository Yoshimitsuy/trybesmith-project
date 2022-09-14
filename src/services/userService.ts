import { ResultSetHeader } from 'mysql2/promise';
import userModel from '../models/userModel';
import IUser from '../interfaces/IUser';

async function createUser(user: IUser): Promise<ResultSetHeader> {
  const data = await userModel.createUser(user);

  return data;
}

export default { createUser };