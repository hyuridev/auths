import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import userModel from "../../entities/User";
import { AppError } from "../helpers/errors";

interface IPayload {
    id: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    /// Bearer "token"

    const authHeader = await request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token invalido", "UNAUTHENTICATED", 401);
    }

    const [, token] = await authHeader.split(" ");
    try {
        const { id } = (await verify(
            token,
            "174dc9d1870970cd5040939990cab2c1"
        )) as IPayload;

        console.log(id);

        const user = await userModel.findOne({ id });

        if (!user) {
            throw new AppError("Invalid User", "UNAUTHENTICATED", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token", "TOKEN_EXPIRED", 401);
    }
}
