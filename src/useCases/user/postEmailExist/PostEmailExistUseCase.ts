import { IRegisterRepository } from "../../../Repositories/register/IRegisterRepository";
import { AppError } from "../../../config/helpers/errors";

interface IRequest {
    email: any;
}

class PostEmailExistUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private registerRepository: IRegisterRepository) {}

    async execute({ email }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError("Email required.", "REQUIRED_EMAIL", 400);
        }
        const emailExist = await this.registerRepository.findByEmail(email);

        if (emailExist) {
            throw new AppError(
                "This email is already register.",
                "EMAIL_ALREADY_REGISTERED",
                400
            );
        }

        return {
            msg: "This email can be registered.",
            code: "SUCCESS",
        };
    }
}
export { PostEmailExistUseCase };
