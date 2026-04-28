import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.router.js";
import expenseRouter from "./routers/expense.router.js";
import categoryRouter from "./routers/category.router.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(express.json()); // for parsing json ( serialisation and deserialization )
app.use(cookieParser()); // for parsing cookies
app.use(urlencoded({ extended: true })); // for form data

// routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/categories", categoryRouter);

export default app;
