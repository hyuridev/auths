import { IConfirmationRepository } from "../../../Repositories/confirmation/IConfirmationRepository";
import { IOauthRepository } from "../../../Repositories/oauth/IOauthRepository";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../config/helpers/errors";

interface IRequest {
    email: any;
    code: any;
}

class PostConfirmationUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private confirmationRepository: IConfirmationRepository,
        private oauthRepository: IOauthRepository
    ) {}

    async execute({ email, code }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError("Email required", "EMAIL_REQUIRED", 400);
        }

        if (!code) {
            throw new AppError("Code required", "CODEL_REQUIRED", 400);
        }

        const user = await this.confirmationRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Invalid email", "BAD_REQUEST", 401);
        }

        if (user.confirmationCode === code) {
            await this.confirmationRepository.update(code, email);

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
        } else {
            throw new AppError("Invalid Code", "INVALID_CODE", 401);
        }
    }
}
export { PostConfirmationUseCase };
