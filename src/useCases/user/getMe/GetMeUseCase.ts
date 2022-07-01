import { verify } from "jsonwebtoken";
import { AppError } from "../../../config/helpers/errors";
import { IUserRepository } from "../../../Repositories/user/IUserRepository";

interface IPayload {
    sub: any;
    _id: string;
}

class GetMeUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private userRepository: IUserRepository) {}

    async execute(authHeader: any): Promise<any> {
        if (!authHeader) {
            throw new AppError("Token not present.", "TOKEN_INVALID", 400);
        }

        const [, token] = await authHeader.split(" ");

        try {
            const resp = (await verify(
                token,
                "174dc9d1870970cd5040939990cab2c1"
            )) as IPayload;

            const id = await resp.sub;

            if (!id) {
                throw new AppError(
                    "Missing credentials..",
                    "UNAUTHENTICATED",
                    401
                );
            }

            console.log(id);

            const user = await this.userRepository.findByIds(id);

            if (user) {
                return user;
            }

            return {};
        } catch {
            throw new AppError("Token invalid", "INVALID_TOKEN", 401);
        }
    }
}
export { GetMeUseCase };
