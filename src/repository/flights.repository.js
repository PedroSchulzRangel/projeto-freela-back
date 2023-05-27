import {db} from "../database/database.connection.js";

export function searchForCity(cityId){
    const city = db.query(`SELECT * FROM cities WHERE id=$1`,[cityId]);
    return city;
}

export function searchForAirlineById(id){
    const airlineSearch = db.query(`SELECT * FROM airlines WHERE id=$1`,[id]);
    return airlineSearch;
}

export async function insertFlightIntoDB(body){
    const {id_city_dep,
        id_city_arr,
        id_airline,
        departure,
        arrival,
        price} = body;

    await db.query(`INSERT INTO flights
        (id_city_dep,id_city_arr,id_airline,departure,arrival,price)
        VALUES ($1,$2,$3,$4,$5,$6)`,[id_city_dep,
        id_city_arr,
        id_airline,
        departure,
        arrival,
        price]);
}