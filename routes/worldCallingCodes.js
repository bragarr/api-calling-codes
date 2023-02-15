import express from "express";
import { getAllCallingCodes } from "../controller/worldCallingCode.js";

export const routerCallingCodes = express.Router();

routerCallingCodes.get("/", getAllCallingCodes);