import { Router } from "express";
import citiesRouter from "./cities.route.js";
import airlinesRouter from "./airlines.route.js";

const router = Router();

router.use(citiesRouter);
router.use(airlinesRouter);

export default router;