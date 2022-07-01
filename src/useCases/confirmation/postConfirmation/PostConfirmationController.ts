import { Request, Response } from "express";
import { PostConfirmationUseCase } from "./PostConfirmationUseCase";

class PostConfirmationController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private postConfirmationUseCase: PostConfirmationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, code } = await request.body;

        const dados = await this.postConfirmationUseCase.execute({
            email,
            code,
        });

        return response.status(200).json(dados);
    }
}

export { PostConfirmationController };
