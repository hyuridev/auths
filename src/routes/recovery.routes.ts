import { Router } from "express";

import getRecoveryController from "../useCases/recovery/getRecovery";
import postRecoveryController from "../useCases/recovery/postRecovery";
const recoveryRoutes = Router();

recoveryRoutes.get("/", (request, response) => {
    return getRecoveryController().handle(request, response);
});

recoveryRoutes.post("/", (request, response) => {
    return postRecoveryController().handle(request, response);
});

export { recoveryRoutes };
