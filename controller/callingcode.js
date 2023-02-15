import { db } from "../db.js";

export const getAllCallingCodes = (_, res) => {
    const q =  "SELECT * FROM country_calling_code";

    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data);
    })
}