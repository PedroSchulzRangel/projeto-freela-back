import { Router } from "express";
import citiesRouter from "./cities.route.js";
import airlinesRouter from "./airlines.route.js";
import flightsRouter from "./flights.route.js";
import hotelsRouter from "./hotels.route.js";

const router = Router();

router.use(citiesRouter);
router.use(airlinesRouter);
router.use(flightsRouter);
router.use(hotelsRouter);

export default router;