import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the BookIt API",
  });
});

export default app;
