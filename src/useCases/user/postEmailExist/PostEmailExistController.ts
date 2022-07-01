import { Request, Response } from "express";
import { PostEmailExistUseCase } from "./PostEmailExistUseCase";

class PostEmailExistController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private postEmailExistUseCase: PostEmailExistUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const dados = await this.postEmailExistUseCase.execute({ email });

        return response.status(200).json(dados);
    }
}

export { PostEmailExistController };
