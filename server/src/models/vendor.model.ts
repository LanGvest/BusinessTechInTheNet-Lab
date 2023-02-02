import {AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

interface CommonAttributes {
	name: string
	country: string
}

type CreationAttributes = CommonAttributes;

interface ModelAttributes extends CommonAttributes {
	id: number
}

type Attributes = CreationAttributes & ModelAttributes;

@Table({
	tableName: "vendors",
	modelName: "vendor",
	timestamps: false
})
export default class Vendor extends Model<Attributes, CreationAttributes> implements ModelAttributes {
	@PrimaryKey
	@AutoIncrement
	@Column
	id!: number;

	@AllowNull(false)
	@Column
	name!: string;

	@AllowNull(false)
	@Column
	country!: string;
}