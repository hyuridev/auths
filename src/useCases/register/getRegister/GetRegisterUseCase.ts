import { AppError } from "../../../config/helpers/errors";
import { IRegisterRepository } from "../../../Repositories/register/IRegisterRepository";

interface IRequest {
    email: any;
}

class GetRegisterUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private registerRepository: IRegisterRepository) {}

    async execute({ email }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError(
                "Missing email querystring.",
                "BAD_REQUEST",
                400
            );
        }

        const emailExixt = await this.registerRepository.findByEmail(email);
        if (emailExixt) {
            throw new AppError(
                "Email already registered.",
                "INVALID_EMAIL",
                401
            );
        }

        return true;
    }
}
export { GetRegisterUseCase };
