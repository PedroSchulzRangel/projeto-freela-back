import { Router } from "express";
import { validateFlightsSchema } from "../middlewares/validateFlightsSchema.middleware.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { insertFlights } from "../controllers/flights.controllers.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateFlightsSchema(flightsSchema), insertFlights);

export default flightsRouter;
