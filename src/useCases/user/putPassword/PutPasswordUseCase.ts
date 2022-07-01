import { AppError } from "../../../config/helpers/errors";
import { IUserRepository } from "../../../Repositories/user/IUserRepository";
import bcrypt from "bcryptjs";

interface IRequest {
    email: any;
    password: any;
}

class PutPasswordUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private userRepository: IUserRepository) {}

    async execute({ email, password }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError(
                "Missing email querystring.",
                "BAD_REQUEST",
                400
            );
        }

        if (!password) {
            throw new AppError("Missing password body.", "BAD_REQUEST", 400);
        }

        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Invalid email", "BAD_REQUEST", 401);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await console.log(hashedPassword);
        await this.userRepository.updatePassword(hashedPassword, user.email);
    }
}
export { PutPasswordUseCase };
