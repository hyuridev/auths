import "express-async-errors";
import "dotenv/config";
import express, { NextFunction, Response, Request } from "express";
import { router } from "./routes";
import cors from "cors";

import mongoose from "mongoose";
import { AppError } from "./config/helpers/errors";

mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
);

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                code: err.code,
                message: err.message,
            });
        }

        response.status(500).json({
            status: "error",
            msg: `internal server error - ${err.message}`,
        });
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Funcionando PORT:${process.env.PORT}`);
});
