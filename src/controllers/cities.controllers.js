import { selectCityName, insertCityIntoDB } from "../repository/cities.repository.js";

export async function insertCity (req, res) {

    const {name} = req.body;

    try{
        const city = await selectCityName(name);

        if(city.rowCount !== 0) return res.status(409).send("Este nome já existe");

        insertCityIntoDB(name);

        res.sendStatus(201);

    } catch (error){
        res.status(500).send(error.message);
    }
}