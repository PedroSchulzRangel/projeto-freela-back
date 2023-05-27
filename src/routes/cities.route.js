import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citiesSchema } from "../schemas/cities.schema.js";
import { insertCity, getCities } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citiesSchema), insertCity);
citiesRouter.get("/cities", getCities);

export default citiesRouter;