import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { airlinesSchema } from "../schemas/airlines.schema.js";
import { insertAirline } from "../controllers/airlines.controller.js";

const airlinesRouter = Router();

airlinesRouter.post("/airlines",  validateSchema(airlinesSchema), insertAirline);

export default airlinesRouter;