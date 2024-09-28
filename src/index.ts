import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectToDatabase } from "./db";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database. Exiting...");
    process.exit(1);
  }
})();
