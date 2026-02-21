import {Router} from "express";
import { deleteJson, getJson, putJson, postjson} from "../controllers/jsoncontrollers.js";

const route = Router();
route.get("/", getJson)

route.post("/", postjson)

route.put("/", putJson)

route.delete("/", deleteJson)
export default route;