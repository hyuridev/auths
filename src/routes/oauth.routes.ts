import { Router } from "express";

import postRefreshController from "../useCases/oauth/postRefresh";
import postResourceOwnerPasswordController from "../useCases/oauth/postResourceOwnerPassword";
const oauthRoutes = Router();

oauthRoutes.post("/refresh", (request, response) => {
    return postRefreshController().handle(request, response);
});

oauthRoutes.post("/resource-owner-password", (request, response) => {
    return postResourceOwnerPasswordController().handle(request, response);
});

export { oauthRoutes };
