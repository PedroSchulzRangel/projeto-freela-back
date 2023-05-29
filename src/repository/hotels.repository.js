import {db} from "../database/database.connection.js";

export function searchForHotels(id){
    const selectHotels = db.query(`SELECT h.name, h.price, i.url
        FROM hotels h JOIN images i ON i.id_hotel=h.id WHERE h.id_city=$1`,[id]);
    return selectHotels;
}

export function searchForFilteredHotels(id, precoMinimo, precoMaximo){
    const selectFilteredHotels = db.query(`SELECT h.name, h.price, i.url
    FROM hotels h JOIN images i ON i.id_hotel=h.id WHERE h.id_city=$1 AND h.price>=$2 AND h.price<=$3;`,[id,precoMinimo,precoMaximo]);
return selectFilteredHotels;
}