import { Request, Response } from "express";
import { PostRecoveryUseCase } from "./PostRecoveryUseCase";

class PostRecoveryController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private postRecoveryUseCase: PostRecoveryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, url } = request.body;

        const dados = await this.postRecoveryUseCase.execute({ email, url });

        return response.status(200).json(dados);
    }
}

export { PostRecoveryController };
