import { RegisterRepository } from "../../../Repositories/register/RegisterRepository";
import { PostRegisterController } from "./PostRegisterController";
import { PostRegisterUseCase } from "./PostRegisterUseCase";

export default (): PostRegisterController => {
    const registerRepository = new RegisterRepository();
    const postRegisterUseCase = new PostRegisterUseCase(registerRepository);
    const postRegisterController = new PostRegisterController(
        postRegisterUseCase
    );

    return postRegisterController;
};
