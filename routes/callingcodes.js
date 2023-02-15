import express from "express";
import { getAllCallingCodes } from "../controller/callingCode.js";

export const routerCallingCodes = express.Router();

routerCallingCodes.get("/", getAllCallingCodes);