import express, { Express } from "express";
import cors from "cors";
import pino from "pino";
import movieRoutes from "./routes/movie.routes";

export const port: number = parseInt(process.env.PORT as string) || 3000;

export const app: Express = express();

export const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true
        }
    }
});

app.use(cors());
app.use(express.json());

app.use(movieRoutes);