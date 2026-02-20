import {Router} from "express";
import { deleteJson, getJson, getMessage } from "../controllers/jsoncontrollers.js";

const route = Router();
route.get("/", getJson)

route.post("/", postJson)

route.put("/", putJson)

route.delete("/", deleteJson)
export default route;