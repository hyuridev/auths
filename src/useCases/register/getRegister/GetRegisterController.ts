import { Request, Response } from "express";
import { GetRegisterUseCase } from "./GetRegisterUseCase";

class GetRegisterController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private getRegisterUseCase: GetRegisterUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.query;

        const dados = await this.getRegisterUseCase.execute({ email });

        return response.status(200).json(dados);
    }
}

export { GetRegisterController };
