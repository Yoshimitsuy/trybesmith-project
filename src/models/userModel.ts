import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/IUser';

async function createUser(user: IUser): Promise<ResultSetHeader> {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith
  .Users (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [data] = await connection.execute<ResultSetHeader>(query, values);

  return data;
}

export default { createUser };