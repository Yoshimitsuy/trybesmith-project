import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function getAll(): Promise<RowDataPacket[]> {
  const query = `
  SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Orders AS o
  JOIN Trybesmith.Products AS p
  ON o.id = p.orderId
  GROUP BY p.orderId
  ORDER BY o.userId;`;

  const [data] = await connection.execute<RowDataPacket[]>(query);

  return data;
}

export default { getAll };