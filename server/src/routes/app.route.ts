import {Router} from "express";
import AppController from "../controllers/app.controller";

const AppRote = Router();

AppRote.use("/app.reset", AppController.reset);

export default AppRote;