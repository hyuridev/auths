import { ConfirmationRepository } from "../../../Repositories/confirmation/ConfirmationRepository";
import { OauthRepository } from "../../../Repositories/oauth/OAuthRepository";
import { PostConfirmationUseCase } from "./PostConfirmationUseCase";
import { PostConfirmationController } from "./PostConfirmationController";

export default (): PostConfirmationController => {
    const oauthRepository = new OauthRepository();
    const confirmationRepository = new ConfirmationRepository();
    const postConfirmationUseCase = new PostConfirmationUseCase(
        confirmationRepository,
        oauthRepository
    );
    const postConfirmationController = new PostConfirmationController(
        postConfirmationUseCase
    );

    return postConfirmationController;
};
