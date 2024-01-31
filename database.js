import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	})
	.promise();

export async function getDogs() {
  const [result] = await pool.query(`SELECT * FROM shelter_dogs`);
  return result;
}

export async function getDog(id) {
	const [result] = await pool.query(
		`
    SELECT * 
    FROM shelter_dogs
    WHERE id = ?`,
		[id]
	);
	return result[0];
}

const dogs = await getDogs(1);
console.log(dogs);