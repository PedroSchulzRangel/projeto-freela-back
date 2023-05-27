import {db} from "../database/database.connection.js";

export function selectCityName(name){
    const searchDBForName = db.query(`SELECT * FROM cities WHERE name=$1;`,[name]);
    return searchDBForName;
}

export async function insertCityIntoDB (name){
    
    await db.query(`INSERT INTO cities
        (name)
        VALUES ($1);`,[name]);
}
export function selectCitiesFromDB(){
    const searchCities = db.query(`SELECT * FROM cities;`);
    return searchCities;
}