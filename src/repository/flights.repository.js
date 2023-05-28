import {db} from "../database/database.connection.js";

export function searchForCity(cityId){
    const city = db.query(`SELECT * FROM cities WHERE id=$1;`,[cityId]);
    return city;
}

export function searchForAirlineById(id){
    const airlineSearch = db.query(`SELECT * FROM airlines WHERE id=$1;`,[id]);
    return airlineSearch;
}

export async function insertFlightIntoDB(id_city_dep,
    id_city_arr,
    id_airline,
    departure,
    arrival,
    price)
    {
    
    await db.query(`INSERT INTO flights
        (id_city_dep,id_city_arr,id_airline,departure,arrival,price)
        VALUES ($1,$2,$3,$4,$5,$6);`,[id_city_dep,
        id_city_arr,
        id_airline,
        departure,
        arrival,
        price]);
}

export function searchForFlight (id) {

    const selectFlightsById = db.query(`SELECT f.id, f.departure,f.price, c.name 
        FROM flights f JOIN cities c ON c.id=f.id_city_dep WHERE f.id_city_arr=$1;`,[id]);
    return selectFlightsById;
}

export function searchForFilteredFlights(id, precoMinimo, precoMaximo){
    const selectFlights = db.query(`SELECT f.id, f.departure,f.price, c.name 
    FROM flights f JOIN cities c ON c.id=f.id_city_dep WHERE f.id_city_arr=$1 AND f.price >=$2 AND f.price <=$3;`,[id, precoMinimo, precoMaximo]);
return selectFlights;
}