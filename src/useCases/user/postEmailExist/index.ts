import { RegisterRepository } from "../../../Repositories/register/RegisterRepository";
import { PostEmailExistController } from "./PostEmailExistController";
import { PostEmailExistUseCase } from "./PostEmailExistUseCase";

export default (): PostEmailExistController => {
    const registerRepository = new RegisterRepository();
    const postEmailExistUseCase = new PostEmailExistUseCase(registerRepository);
    const postEmailExistController = new PostEmailExistController(
        postEmailExistUseCase
    );

    return postEmailExistController;
};
