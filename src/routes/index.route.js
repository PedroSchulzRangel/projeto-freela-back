import { Router } from "express";
import citiesRouter from "./cities.route.js";

const router = Router();

router.use(citiesRouter);

export default router;