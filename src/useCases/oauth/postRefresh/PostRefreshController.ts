import { Request, Response } from "express";
import { PostRefreshUseCase } from "./PostRefreshUseCase";

class PostRefreshController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private postRefreshUseCase: PostRefreshUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.body;

        const dados = await this.postRefreshUseCase.execute({
            token,
        });

        return response.status(200).json(dados);
    }
}

export { PostRefreshController };
