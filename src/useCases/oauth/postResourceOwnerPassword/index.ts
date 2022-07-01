import { OauthRepository } from "../../../Repositories/oauth/OAuthRepository";
import { PostResourceOwnerPasswordUseCase } from "./PostResourceOwnerPasswordUseCase";
import { PostResourceOwnerPasswordController } from "./PostResourceOwnerPasswordController";

export default (): PostResourceOwnerPasswordController => {
    const oauthRepository = new OauthRepository();
    const postResourceOwnerPasswordUseCase =
        new PostResourceOwnerPasswordUseCase(oauthRepository);
    const postResourceOwnerPasswordController =
        new PostResourceOwnerPasswordController(
            postResourceOwnerPasswordUseCase
        );

    return postResourceOwnerPasswordController;
};
