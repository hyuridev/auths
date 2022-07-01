import { Request, Response } from "express";
import { PutPasswordUseCase } from "./PutPasswordUseCase";

class PutPasswordController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private putPasswordUseCase: PutPasswordUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const dados = await this.putPasswordUseCase.execute({
            email,
            password,
        });

        return response.status(200).json(dados);
    }
}

export { PutPasswordController };
