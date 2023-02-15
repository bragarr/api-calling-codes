import express from "express";
import cors from "cors";

import { routerCallingCodes } from "./routes/callingCodes.js"

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/callingcodes", routerCallingCodes);

app.listen(port, () => {
    console.log("Server On")
});