import { AppError } from "../../../config/helpers/errors";
import SendEmailService from "../../../config/libs/ses2";
import { IConfirmationRepository } from "../../../Repositories/confirmation/IConfirmationRepository";

interface IRequest {
    email: any;
}

class GetConfirmationUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private confirmationRepository: IConfirmationRepository) {}

    async execute({ email }: IRequest): Promise<any> {
        if (!email) {
            throw new AppError(
                "Missing email querystring.",
                "BAD_REQUEST",
                400
            );
        }

        const sendEmail = new SendEmailService();

        await sendEmail.run();

        return {
            msg: "Email enviado com sucesso",
        };

        // const user = await this.confirmationRepository.findByEmail(email);

        /*  if (!user && user.confirmedEmailAt == null) {
            user.confirmationCode = "123456";
            await user.save();

            console.log("123456");

          
        } */

        //  return await {};
    }
}
export { GetConfirmationUseCase };
