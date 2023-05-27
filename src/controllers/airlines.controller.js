import { searchForAirlineName, insertAirlineIntoDB} from "../repository/airlines.repository.js";

export async function insertAirline (req, res) {

    const {name} = req.body;

    try{
        const airline = await searchForAirlineName(name);

        if(airline.rowCount !== 0) return res.status(409).send("Este nome já existe");

        insertAirlineIntoDB(name);

        res.sendStatus(201);

    } catch (error){
        res.status(500).send(error.message);
    }
}