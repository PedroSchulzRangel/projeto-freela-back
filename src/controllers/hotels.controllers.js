import { searchForCity} from "../repository/flights.repository.js";
import { searchForHotels, searchForFilteredHotels } from "../repository/hotels.repository.js";

export async function getHotelsByCityId (req, res){
    
    const {id} = req.params;
    const precoMinimo = parseInt(req.query.precoMinimo);
    const precoMaximo = parseInt(req.query.precoMaximo);
    let hotels;

    try{
        const city = searchForCity(id);

        if(city.rowCount === 0) return res.status(404).send("Esta cidade não existe");

        if(req.query.precoMinimo === undefined && req.query.precoMaximo === undefined){
            hotels = await searchForHotels(id);
        } else {
            hotels = await searchForFilteredHotels(id, precoMinimo, precoMaximo);
        }

        res.status(200).send(hotels.rows);


    } catch (error){
        res.status(500).send(error.message);
    }
}