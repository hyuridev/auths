import { verify, sign } from "jsonwebtoken";
import { AppError } from "../../../config/helpers/errors";
import { IOauthRepository } from "../../../Repositories/oauth/IOauthRepository";

interface IRequest {
    token: any;
}

interface IPayload {
    sub: string;
}

class PostRefreshUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private oauthRepository: IOauthRepository) {}

    async execute({ token }: IRequest): Promise<any> {
        if (!token) {
            throw new AppError("Token required", "REQUIRED_TOKEN", 400);
        }

        const { sub } = verify(
            token,
            "9a8c913c7c7108d5be2e690ed377bc9b"
        ) as IPayload;

        const userId = sub;

        const useToken = await this.oauthRepository.usersTokenRepository(
            userId,
            token
        );

        if (!useToken) {
            throw new AppError(
                "Token refresh failed unexpectedly.",
                "INTERNAL_SERVER_ERROR",
                401
            );
        }

        await this.oauthRepository.deleteByid(userId);

        const refreshToken = await sign(
            {},
            "9a8c913c7c7108d5be2e690ed377bc9b",
            {
                subject: userId,
                expiresIn: "5d",
            }
        );

        await this.oauthRepository.saveToken(refreshToken, token, userId);

        return await {
            token,
            refreshToken,
        };
    }
}
export { PostRefreshUseCase };
