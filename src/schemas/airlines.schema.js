import joi from "joi";

export const airlinesSchema = joi.object({
    name: joi.string().uppercase().required()
});