import {Request, Response} from "express";
import Souvenir from "../models/souvenir.model";
import Vendor from "../models/vendor.model";

export default class SouvenirController {
	static async getSouvenirs(req: Request, res: Response): Promise<void> {
		try {
			const souvenirs = await Souvenir.findAll({
				attributes: {
					exclude: ["vendorId"]
				},
				include: Vendor,
			});
			res.json(souvenirs);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}

	static async getSouvenirsByVendorName(req: Request, res: Response): Promise<void> {
		try {
			const {vendorName} = req.body;
			const souvenirs = await Souvenir.findAll({
				attributes: {
					exclude: ["vendorId"]
				},
				include: {
					model: Vendor,
					where: {
						"name": vendorName
					}
				}
			});
			res.json(souvenirs);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}

	static async getSouvenirsByVendorCountry(req: Request, res: Response): Promise<void> {
		try {
			const {vendorCountry} = req.body;
			const souvenirs = await Souvenir.findAll({
				attributes: {
					exclude: ["vendorId"]
				},
				include: {
					model: Vendor,
					where: {
						"country": vendorCountry
					}
				}
			});
			res.json(souvenirs);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}
}