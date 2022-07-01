import { RegisterRepository } from "../../../Repositories/register/RegisterRepository";
import { GetRegisterController } from "./GetRegisterController";
import { GetRegisterUseCase } from "./GetRegisterUseCase";

export default (): GetRegisterController => {
    const registerRepository = new RegisterRepository();
    const getRegisterUseCase = new GetRegisterUseCase(registerRepository);
    const getRegisterController = new GetRegisterController(getRegisterUseCase);

    return getRegisterController;
};
