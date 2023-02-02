import {Request, Response} from "express";
import Souvenir from "../models/souvenir.model";
import Vendor from "../models/vendor.model";
import {Op, Sequelize} from "sequelize";

export default class VendorController {
	static async getVendors(req: Request, res: Response): Promise<void> {
		try {
			const vendors = await Vendor.findAll({
				include: {
					attributes: {
						exclude: ["vendorId"]
					},
					model: Souvenir
				}
			});
			res.json(vendors);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}

	static async getVendorsUpToSouvenirsMaxPrice(req: Request, res: Response): Promise<void> {
		try {
			const {maxPrice} = req.body;
			const vendors = await Vendor.findAll({
				include: {
					attributes: {
						exclude: ["vendorId"]
					},
					model: Souvenir,
					where: {
						"price": {
							[Op.lte]: maxPrice
						}
					}
				}
			});
			res.json(vendors);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}

	static async getVendorsBySouvenirNameAndReleaseYear(req: Request, res: Response): Promise<void> {
		try {
			const {souvenirName, souvenirReleaseYear} = req.body;
			const vendors = await Vendor.findAll({
				include: {
					attributes: {
						exclude: ["vendorId"]
					},
					model: Souvenir,
					where: {
						"name": souvenirName,
						[Op.and]: Sequelize.where(Sequelize.fn("date_part", "year", Sequelize.col("souvenirs.releaseDate")), souvenirReleaseYear)
					}
				}
			});
			res.json(vendors);
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}

	static async deleteVendorByName(req: Request, res: Response): Promise<void> {
		try {
			const {vendorName} = req.body;
			const vendorToDelete = await Vendor.findOne({
				where: {
					"name": vendorName
				}
			});
			if(!vendorToDelete) {
				res.status(404).end();
				return;
			}
			await Souvenir.destroy({
				where: {
					vendorId: vendorToDelete.id
				}
			});
			await vendorToDelete.destroy();
			res.status(200).end();
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}
}