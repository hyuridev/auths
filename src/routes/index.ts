import { Router } from "express";

import { appRoutes } from "./app.routes";
import { confirmationRoutes } from "./confirmation.routes";
import { oauthRoutes } from "./oauth.routes";
import { registerRoutes } from "./register.routes";
import { userRoutes } from "./user.routes";
import { recoveryRoutes } from "./recovery.routes";

const router = Router();

router.use("/", appRoutes);
router.use("/confirmation", confirmationRoutes);
router.use("/grant", oauthRoutes);
router.use("/register", registerRoutes);
router.use("/user", userRoutes);
router.use("/recovery", recoveryRoutes);

export { router };
