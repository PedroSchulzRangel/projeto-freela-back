import { searchForCity, searchForAirlineById, insertFlightIntoDB} from "../repository/flights.repository.js";

export async function insertFlights(req, res){
    const {id_city_dep,
        id_city_arr,
        id_airline,
        departure,
        arrival,
        price} = req.body;

    try{
        const cityDep = await searchForCity(id_city_dep);

        const cityArr = await searchForCity(id_city_arr);

        if(cityDep.rowCount === 0 || cityArr.rowCount === 0) return res.status(400).send("id da cidade de origem ou destino inválido");

        const airline = await searchForAirlineById(id_airline);

        if(airline.rowCount === 0) return res.status(400).send("id da linha aérea não existe");

        if(departure >= arrival) return res.status(400).send("datas e horários inválidos");

        insertFlightIntoDB(id_city_dep,
            id_city_arr,
            id_airline,
            departure,
            arrival,
            price);

        res.sendStatus(201);

    } catch (error){
        res.status(500).send(error.message);
    }
}