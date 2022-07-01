import { Router } from "express";

import getRegisterController from "../useCases/register/getRegister";
import postRegisterController from "../useCases/register/postRegister";
const registerRoutes = Router();

registerRoutes.get("/", (request, response) => {
    return getRegisterController().handle(request, response);
});

registerRoutes.post("/", (request, response) => {
    return postRegisterController().handle(request, response);
});

export { registerRoutes };
