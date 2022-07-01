import { OauthRepository } from "../../../Repositories/oauth/OAuthRepository";
import { PostRefreshUseCase } from "./PostRefreshUseCase";
import { PostRefreshController } from "./PostRefreshController";

export default (): PostRefreshController => {
    const oauthRepository = new OauthRepository();
    const postRefreshUseCase = new PostRefreshUseCase(oauthRepository);
    const postRefreshController = new PostRefreshController(postRefreshUseCase);

    return postRefreshController;
};
