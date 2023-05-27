import {db} from "../database/database.connection.js";

export function searchForAirlineName (name){
    const searchForAirNameInDB = db.query(`SELECT * FROM airlines WHERE name=$1`,[name]);
    return searchForAirNameInDB;
}

export async function insertAirlineIntoDB (name){
    await db.query(`INSERT INTO airlines (name) VALUES ($1)`,[name]);
}