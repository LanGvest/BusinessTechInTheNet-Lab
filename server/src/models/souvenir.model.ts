import {AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

interface CommonAttributes {
	name: string
	price: number
	releaseDate: string
}

interface CreationAttributes extends CommonAttributes {
	vendorId: number
}

interface ModelAttributes extends CommonAttributes {
	id: number
}

type Attributes = CreationAttributes & ModelAttributes;

@Table({
	tableName: "souvenirs",
	modelName: "souvenir",
	timestamps: false
})
export default class Souvenir extends Model<Attributes, CreationAttributes> implements ModelAttributes {
	@PrimaryKey
	@AutoIncrement
	@Column
	id!: number;

	@AllowNull(false)
	@Column
	name!: string;

	@AllowNull(false)
	@Column(DataType.FLOAT)
	price!: number;

	@AllowNull(false)
	@Column(DataType.DATEONLY)
	releaseDate!: string;
}