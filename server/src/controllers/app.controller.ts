import {Request, Response} from "express";
import Souvenir from "../models/souvenir.model";
import Vendor from "../models/vendor.model";

export default class AppController {
	static async reset(req: Request, res: Response): Promise<void> {
		try {
			await Souvenir.destroy({
				truncate: true,
				cascade: true
			});
			await Vendor.destroy({
				truncate: true,
				cascade: true
			});
			const vendor1 = await Vendor.create({
				name: "Rippin, Turner and McCullough",
				country: "Россия"
			});
			const vendor2 = await Vendor.create({
				name: "Heller and Sons",
				country: "Япония"
			});
			const vendor3 = await Vendor.create({
				name: "Zemlak-Nader",
				country: "США"
			});
			const vendor4 = await Vendor.create({
				name: "Kling Group",
				country: "Россия"
			});
			const vendor5 = await Vendor.create({
				name: "Trantow-Murray",
				country: "Япония"
			});
			const vendor6 = await Vendor.create({
				name: "Kohler-Abshire",
				country: "Франция"
			});
			const vendor7 = await Vendor.create({
				name: "Hettinger-D'Amore",
				country: "Франция"
			});
			const vendor8 = await Vendor.create({
				name: "Hoppe, Okuneva and Frami",
				country: "Беларусь"
			});
			const vendor9 = await Vendor.create({
				name: "Rodriguez-Von",
				country: "Китай"
			});
			const vendor10 = await Vendor.create({
				name: "Ritchie-Feil",
				country: "Англия"
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2011-09-30",
				price: 258.81,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2014-07-26",
				price: 170.99,
				vendorId: vendor5.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2013-04-03",
				price: 488.48,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2018-06-11",
				price: 37.75,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2013-11-11",
				price: 32.44,
				vendorId: vendor4.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2016-01-11",
				price: 264.39,
				vendorId: vendor8.id
			});
			await Souvenir.create({
				name: "Магнитик",
				releaseDate: "2010-11-15",
				price: 19.0,
				vendorId: vendor8.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2015-06-10",
				price: 454.95,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2018-03-18",
				price: 383.81,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2012-11-20",
				price: 455.24,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2018-03-13",
				price: 438.51,
				vendorId: vendor9.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2018-01-25",
				price: 207.81,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Песочные часы",
				releaseDate: "2019-11-18",
				price: 421.9,
				vendorId: vendor4.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2019-04-30",
				price: 383.23,
				vendorId: vendor7.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2011-09-27",
				price: 402.4,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Магнитик",
				releaseDate: "2014-11-20",
				price: 485.23,
				vendorId: vendor7.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2019-08-02",
				price: 402.25,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2023-01-18",
				price: 116.87,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Картина",
				releaseDate: "2016-06-18",
				price: 298.88,
				vendorId: vendor7.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2013-04-29",
				price: 177.01,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2016-07-08",
				price: 497.96,
				vendorId: vendor6.id
			});
			await Souvenir.create({
				name: "Песочные часы",
				releaseDate: "2015-11-25",
				price: 479.83,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2017-10-18",
				price: 346.13,
				vendorId: vendor7.id
			});
			await Souvenir.create({
				name: "Песочные часы",
				releaseDate: "2014-11-21",
				price: 176.87,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2021-07-01",
				price: 309.44,
				vendorId: vendor8.id
			});
			await Souvenir.create({
				name: "Песочные часы",
				releaseDate: "2015-03-20",
				price: 7.62,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2012-07-29",
				price: 453.93,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Картина",
				releaseDate: "2015-07-10",
				price: 289.33,
				vendorId: vendor6.id
			});
			await Souvenir.create({
				name: "Магнитик",
				releaseDate: "2022-09-20",
				price: 194.9,
				vendorId: vendor8.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2018-08-17",
				price: 440.58,
				vendorId: vendor5.id
			});
			await Souvenir.create({
				name: "Сумка",
				releaseDate: "2019-10-29",
				price: 142.51,
				vendorId: vendor7.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2017-05-13",
				price: 53.81,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2022-02-12",
				price: 59.3,
				vendorId: vendor6.id
			});
			await Souvenir.create({
				name: "Магнитик",
				releaseDate: "2019-12-05",
				price: 107.12,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2012-06-22",
				price: 72.57,
				vendorId: vendor10.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2010-12-08",
				price: 31.46,
				vendorId: vendor6.id
			});
			await Souvenir.create({
				name: "Картина",
				releaseDate: "2013-11-09",
				price: 57.67,
				vendorId: vendor9.id
			});
			await Souvenir.create({
				name: "Картина",
				releaseDate: "2022-01-13",
				price: 358.01,
				vendorId: vendor10.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2019-08-17",
				price: 269.69,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Картина",
				releaseDate: "2019-08-17",
				price: 299.38,
				vendorId: vendor9.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2014-01-23",
				price: 488.09,
				vendorId: vendor3.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2021-01-17",
				price: 8.2,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2020-04-10",
				price: 69.13,
				vendorId: vendor5.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2022-06-03",
				price: 124.41,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2020-04-11",
				price: 254.4,
				vendorId: vendor2.id
			});
			await Souvenir.create({
				name: "Брелок",
				releaseDate: "2015-09-20",
				price: 376.36,
				vendorId: vendor8.id
			});
			await Souvenir.create({
				name: "Ручка",
				releaseDate: "2010-07-17",
				price: 185.44,
				vendorId: vendor5.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2019-03-12",
				price: 52.2,
				vendorId: vendor10.id
			});
			await Souvenir.create({
				name: "Блокнот",
				releaseDate: "2020-07-24",
				price: 198.29,
				vendorId: vendor1.id
			});
			await Souvenir.create({
				name: "Статуэтка",
				releaseDate: "2018-08-12",
				price: 272.0,
				vendorId: vendor7.id
			});

			res.status(200).end();
		} catch(e) {
			console.error(e);
			res.status(500).end();
		}
	}
}