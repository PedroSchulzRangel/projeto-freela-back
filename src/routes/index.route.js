import { Router } from "express";
import citiesRouter from "./cities.route.js";
import airlinesRouter from "./airlines.route.js";
import flightsRouter from "./flights.route.js";

const router = Router();

router.use(citiesRouter);
router.use(airlinesRouter);
router.use(flightsRouter);

export default router;