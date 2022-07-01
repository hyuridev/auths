import { Request, Response } from "express";
import { GetMeUseCase } from "./GetMeUseCase";

class GetMeController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private getRegisterUseCase: GetMeUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const authHeader = await request.headers.authorization;

        const dados = await this.getRegisterUseCase.execute(authHeader);

        return response.status(200).json(dados);
    }
}

export { GetMeController };
