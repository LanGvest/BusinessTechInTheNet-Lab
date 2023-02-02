import {Router} from "express";
import SouvenirController from "../controllers/souvenir.controller";

const SouvenirRoute = Router();

SouvenirRoute.use("/souvenirs.getSouvenirs", SouvenirController.getSouvenirs);
SouvenirRoute.use("/souvenirs.getSouvenirsByVendorName", SouvenirController.getSouvenirsByVendorName);
SouvenirRoute.use("/souvenirs.getSouvenirsByVendorCountry", SouvenirController.getSouvenirsByVendorCountry);

export default SouvenirRoute;