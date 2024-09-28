import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

// Donenv is not working, so I have to hardcode the DATABASE_URL
const DATABASE_URL =
  "postgresql://postgres.irepargshoaegdnnppgf:mJyqks55MgQ6q5oV@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";

const client = new Client({
  connectionString: DATABASE_URL,
});

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw new Error("Database connection failed");
  }
};

export const db = drizzle(client);
