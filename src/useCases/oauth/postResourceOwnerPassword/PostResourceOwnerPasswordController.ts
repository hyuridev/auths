import { Request, Response } from "express";
import { PostResourceOwnerPasswordUseCase } from "./PostResourceOwnerPasswordUseCase";

class PostResourceOwnerPasswordController {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private postResourceOwnerPasswordUseCase: PostResourceOwnerPasswordUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const dados = await this.postResourceOwnerPasswordUseCase.execute({
            email,
            password,
        });

        return response.status(200).json(dados);
    }
}

export { PostResourceOwnerPasswordController };
