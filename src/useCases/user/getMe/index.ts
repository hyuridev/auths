import { UserRepository } from "../../../Repositories/user/UserRepository";
import { GetMeController } from "./GetMeController";
import { GetMeUseCase } from "./GetMeUseCase";

export default (): GetMeController => {
    const userRepository = new UserRepository();
    const getMeUseCase = new GetMeUseCase(userRepository);
    const getMeController = new GetMeController(getMeUseCase);

    return getMeController;
};
