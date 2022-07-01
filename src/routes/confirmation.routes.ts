import { Router } from "express";

import getConfirmationController from "../useCases/confirmation/getConfirmation";
import postConfirmationController from "../useCases/confirmation/postConfirmation";

const confirmationRoutes = Router();

confirmationRoutes.get("/", (request, response) => {
    return getConfirmationController().handle(request, response);
});

confirmationRoutes.post("/", (request, response) => {
    return postConfirmationController().handle(request, response);
});

export { confirmationRoutes };
