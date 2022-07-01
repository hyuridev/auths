import { IOauthRepository } from "../../../Repositories/oauth/IOauthRepository";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../config/helpers/errors";

interface IRequest {
    email: string;
    password: string;
}

class PostResourceOwnerPasswordUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private oauthRepository: IOauthRepository) {}

    async execute({ email, password }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError("Email required.", "REQUiRED_EMAIL", 400);
        }

        if (!password) {
            throw new AppError("Password required.", "REQUiRED_PASSWORD", 400);
        }

        const user = await this.oauthRepository.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new AppError(
                "The credentials provided were invalid.",
                "INVALID_CREDENTIALS",
                401
            );
        }

        if (!user.confirmedEmailAt) {
            throw new AppError(
                "Email must be confirmed to authenticate.",
                "EMAIL_NOT_CONFIRMED",
                401
            );
        }
        const token = await sign({}, "174dc9d1870970cd5040939990cab2c1", {
            subject: user.id,
            expiresIn: "1d",
        });

        const refreshToken = await sign(
            {},
            "9a8c913c7c7108d5be2e690ed377bc9b",
            {
                subject: user.id,
                expiresIn: "5d",
            }
        );

        await this.oauthRepository.saveToken(refreshToken, token, user.id);

        return await {
            token,
            refreshToken,
        };
    }
}
export { PostResourceOwnerPasswordUseCase };
