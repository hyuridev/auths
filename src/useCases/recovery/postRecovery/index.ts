import { RecoveryRepository } from "../../../Repositories/recovery/RecoveryRepository";
import { PostRecoveryController } from "./PostRecoveryController";
import { PostRecoveryUseCase } from "./PostRecoveryUseCase";

export default (): PostRecoveryController => {
    const recoveryRepository = new RecoveryRepository();
    const postRecoveryUseCase = new PostRecoveryUseCase(recoveryRepository);
    const postRecoveryController = new PostRecoveryController(
        postRecoveryUseCase
    );

    return postRecoveryController;
};
