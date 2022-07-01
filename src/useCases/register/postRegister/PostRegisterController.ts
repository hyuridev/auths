import { Request, Response } from "express";
import { PostRegisterUseCase } from "./PostRegisterUseCase";

class PostRegisterController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private postRegisterUseCase: PostRegisterUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, surname, email, password } = request.body;

        const dados = await this.postRegisterUseCase.execute({
            name,
            surname,
            email,
            password,
        });

        return response.status(200).json(dados);
    }
}

export { PostRegisterController };
