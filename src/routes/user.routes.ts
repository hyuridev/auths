import { Router } from "express";
import { ensureAuthenticated } from "../config/middlewares/authenticate";

import getMeController from "../useCases/user/getMe";
import putPasswordController from "../useCases/user/putPassword";
import postEmailExistController from "../useCases/user/postEmailExist";
const userRoutes = Router();

userRoutes.post("/emailExist", (request, response) => {
    return postEmailExistController().handle(request, response);
});

userRoutes.put("/password", (request, response) => {
    return putPasswordController().handle(request, response);
});

userRoutes.use(ensureAuthenticated);

userRoutes.get("/me", (request, response) => {
    return getMeController().handle(request, response);
});

export { userRoutes };
