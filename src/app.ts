import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json("Welcome to the BookIt API!");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

export default app;
