import { IRegisterRepository } from "../../../Repositories/register/IRegisterRepository";
import bcrypt from "bcryptjs";
import { AppError } from "../../../config/helpers/errors";

interface IRequest {
    name: any;
    email: any;
    surname: any;
    password: any;
}

class PostRegisterUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private registerRepository: IRegisterRepository) {}

    async execute({ name, surname, email, password }: IRequest): Promise<any> {
        if (!name) {
            throw new AppError("Name already required.", "REQUIRED_NAME", 400);
        }
        if (!surname) {
            throw new AppError(
                "Surname already required.",
                "REQUIRED_SURNAME",
                400
            );
        }

        if (!email) {
            throw new AppError(
                "Email already required.",
                "REQUIRED_EMAIL",
                400
            );
        }

        if (!password) {
            throw new AppError(
                "Password already required.",
                "REQUIRED_PASSWORD",
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

        const passwordHash = await bcrypt.hash(password, 10);

        await this.registerRepository.save(name, surname, email, passwordHash);

        return {};
    }
}
export { PostRegisterUseCase };
