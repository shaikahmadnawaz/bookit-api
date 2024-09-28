import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.log("Error connecting to the database:", err);
    throw new Error("Database connection failed");
  }
};

export const db = drizzle(client);
