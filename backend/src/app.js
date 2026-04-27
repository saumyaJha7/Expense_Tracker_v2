import "dotenv/config";
import express from "express";
import { clerkMiddleware, getAuth } from "@clerk/express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(express.json());
app.use(express.urlencoded());
app.use(clerkMiddleware());

//

export default app;
