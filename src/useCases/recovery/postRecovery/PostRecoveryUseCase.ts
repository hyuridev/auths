import { AppError } from "../../../config/helpers/errors";
import { IRecoveryRepository } from "../../../Repositories/recovery/IRecoveryRepository";
import bcrypt from "bcryptjs";

interface IRequest {
    email: any;
    url: any;
}

class PostRecoveryUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private recoveryRepository: IRecoveryRepository) {}

    async execute({ email, url }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError(
                "Missing email querystring.",
                "BAD_REQUEST",
                400
            );
        }
        if (!url) {
            throw new AppError("Missing url querystring.", "BAD_REQUEST", 400);
        }

        const user = await this.recoveryRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Invalid email", "BAD_REQUEST", 401);
        }

        const passwordHash = await bcrypt.hash(user.password, 10);

        user.newTokenEmailNewPassword = await passwordHash;
        user.confirmedEmailNewPasswordAt = await new Date();
        await user.save();

        return {
            dados: {
                link: url + "?token=" + passwordHash + "&email=" + email,
            },
            code: "SUCCESS",
        };
    }
}
export { PostRecoveryUseCase };
