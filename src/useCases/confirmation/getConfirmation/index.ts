import { ConfirmationRepository } from "../../../Repositories/confirmation/ConfirmationRepository";
import { GetConfirmationUseCase } from "./GetConfirmationUseCase";
import { GetConfirmationController } from "./GetConfirmationController";

export default (): GetConfirmationController => {
    const confirmationRepository = new ConfirmationRepository();
    const getConfirmationUseCase = new GetConfirmationUseCase(
        confirmationRepository
    );
    const getConfirmationController = new GetConfirmationController(
        getConfirmationUseCase
    );

    return getConfirmationController;
};
