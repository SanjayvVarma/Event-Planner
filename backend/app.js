import express from "express";
import { config } from "dotenv";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";
import massageRouter from "./routes/messageRouter.js";

const app = express();

config({ path: "./config/config.env" });


app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", massageRouter)

dbConnection();

export default app;