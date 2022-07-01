import { UserRepository } from "../../../Repositories/user/UserRepository";
import { PutPasswordController } from "./PutPasswordController";
import { PutPasswordUseCase } from "./PutPasswordUseCase";

export default (): PutPasswordController => {
    const userRepository = new UserRepository();
    const putPasswordUseCase = new PutPasswordUseCase(userRepository);
    const putPasswordController = new PutPasswordController(putPasswordUseCase);

    return putPasswordController;
};
