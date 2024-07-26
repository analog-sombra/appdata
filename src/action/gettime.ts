"use server";

import mysql from "mysql2";
interface TimeResponse {
  serverTime: Date;
  databaseTime: Date;
}
const GetTime = async (): Promise<TimeResponse> => {
  const pool = mysql
    .createPool({
      host: "127.0.0.1",
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    })
    .promise();

  const result: any = await pool.query(
    `SELECT CURRENT_TIMESTAMP as databaseTime;`
  );
  const rows = result[0][0].databaseTime;
  return {
    serverTime: new Date(),
    databaseTime: new Date(rows),
  };
};

export default GetTime;
