import { RecoveryRepository } from "../../../Repositories/recovery/RecoveryRepository";
import { GetRecoveryController } from "./GetRecoveryController";
import { GetRecoveryUseCase } from "./GetRecoveryUseCase";

export default (): GetRecoveryController => {
    const recoveryRepository = new RecoveryRepository();
    const getRecoveryUseCase = new GetRecoveryUseCase(recoveryRepository);
    const getRecoveryController = new GetRecoveryController(getRecoveryUseCase);

    return getRecoveryController;
};
