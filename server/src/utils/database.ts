import {Sequelize} from "sequelize-typescript";

const Database = new Sequelize("gsu_btvi_lab1", "postgres", "postgres", {
	dialect: "postgres",
	host: "localhost",
	port: 5432
});

export default Database;