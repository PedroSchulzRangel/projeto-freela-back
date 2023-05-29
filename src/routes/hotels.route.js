import { Router } from "express";
import { getHotelsByCityId } from "../controllers/hotels.controllers.js";

const hotelsRouter = Router();

hotelsRouter.get("/hotels/city/:id", getHotelsByCityId);

export default hotelsRouter;