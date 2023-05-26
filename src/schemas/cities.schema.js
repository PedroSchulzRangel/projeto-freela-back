import joi from "joi";

export const citiesSchema = joi.object({
    name: joi.string().uppercase().required()
});