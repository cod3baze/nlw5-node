import { Router } from "express";

import { agenciesRoutes } from "./agencies.routes";

const routes = Router();

routes.use("/agencies", agenciesRoutes);

export { routes };
