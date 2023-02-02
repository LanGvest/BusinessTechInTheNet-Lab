import {Router} from "express";
import VendorController from "../controllers/vendor.controller";

const VendorRote = Router();

VendorRote.use("/vendors.getVendors", VendorController.getVendors);
VendorRote.use("/vendors.getVendorsUpToSouvenirsMaxPrice", VendorController.getVendorsUpToSouvenirsMaxPrice);
VendorRote.use("/vendors.getVendorsBySouvenirNameAndReleaseYear", VendorController.getVendorsBySouvenirNameAndReleaseYear);
VendorRote.use("/vendors.deleteVendorByName", VendorController.deleteVendorByName);

export default VendorRote;