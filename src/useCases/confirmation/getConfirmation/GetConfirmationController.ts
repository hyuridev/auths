import { Request, Response } from "express";
import { GetConfirmationUseCase } from "./GetConfirmationUseCase";

class GetConfirmationController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private getConfirmationUseCase: GetConfirmationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = await request.query;

        const dados = await this.getConfirmationUseCase.execute({ email });

        return response.status(200).json(dados);
    }
}

export { GetConfirmationController };
