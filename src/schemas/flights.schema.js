import joi from "joi";

export const flightsSchema = joi.object({
    id_city_dep: joi.number().integer().required(),
    id_city_arr: joi.number().integer().required(),
    id_airline: joi.number().integer().required(),
    departure: joi.date().timestamp().required(),
    arrival: joi.date().timestamp().required(),
    price: joi.number().integer().required()
});