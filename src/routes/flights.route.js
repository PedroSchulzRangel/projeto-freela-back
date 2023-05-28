import { Router } from "express";
import { validateFlightsSchema } from "../middlewares/validateFlightsSchema.middleware.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { insertFlights, getFlightsByCityId, getFlightsById} from "../controllers/flights.controllers.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateFlightsSchema(flightsSchema), insertFlights);
flightsRouter.get("/flights/city/:id", getFlightsByCityId);
flightsRouter.get("/flights/:id", getFlightsById);

export default flightsRouter;
