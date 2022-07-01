import { AppError } from "../../../config/helpers/errors";
import { IRecoveryRepository } from "../../../Repositories/recovery/IRecoveryRepository";

interface IRequest {
    email: any;
    tokenNewPassword: any;
}

class GetRecoveryUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private recoveryRepository: IRecoveryRepository) {}

    async execute({ email, tokenNewPassword }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError(
                "Missing email querystring.",
                "BAD_REQUEST",
                400
            );
        }

        if (!tokenNewPassword) {
            throw new AppError(
                "Missing token querystring.",
                "BAD_REQUEST",
                400
            );
        }

        const user = await this.recoveryRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Invalid email", "BAD_REQUEST", 401);
        }

        const dateToken = await new Date(user.confirmedEmailNewPasswordAt);
        const dateTokenSegundos = (await dateToken.getTime()) / 1000;
        const dateNowSegundos = (await new Date().getTime()) / 1000;

        if (
            user.newTokenEmailNewPassword !== tokenNewPassword ||
            dateTokenSegundos + 180 < dateNowSegundos
        ) {
            throw new AppError("expired token", "EXPIRED_TOKEN", 401);
        }

        return {
            msg: "Token Ativo para senha",
            code: "SUCCESS",
        };
    }
}
export { GetRecoveryUseCase };
