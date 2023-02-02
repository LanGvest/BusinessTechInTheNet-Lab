import Vendor from "../models/vendor.model";
import Souvenir from "../models/souvenir.model";
import Database from "./database";

Database.addModels([Vendor, Souvenir]);

Vendor.hasMany(Souvenir);
Souvenir.belongsTo(Vendor);