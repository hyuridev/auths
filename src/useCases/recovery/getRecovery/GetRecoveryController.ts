import { Request, Response } from "express";
import { GetRecoveryUseCase } from "./GetRecoveryUseCase";

class GetRecoveryController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private getRecoveryUseCase: GetRecoveryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, tokenNewPassword } = request.query;

        const dados = await this.getRecoveryUseCase.execute({
            email,
            tokenNewPassword,
        });

        return response.status(200).json(dados);
    }
}

export { GetRecoveryController };
