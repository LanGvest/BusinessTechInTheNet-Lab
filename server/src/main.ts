import express from "express";
import AppRote from "./routes/app.route";
import SouvenirRoute from "./routes/souvenir.route";
import VendorRoute from "./routes/vendor.route";
import Database from "./utils/database";
import cors from "cors";
import "./utils/models";

const PORT: number = Number(process.env.PORT) || 8080;
const app = express();

app.use(cors({
	origin: "*"
}));
app.use(express.json());
app.use("/", AppRote);
app.use("/", SouvenirRoute);
app.use("/", VendorRoute);

!async function start(): Promise<void> {
	await Database.authenticate();
	await Database.sync();
	app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
}();