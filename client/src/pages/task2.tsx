import {useCallback, useEffect, useState} from "react";
import {Souvenir} from "../types/souvenir.type";
import SouvenirCard from "../components/souvenirCard";

export default function Task2(): JSX.Element {
	const [souvenirs, setSouvenirs] = useState<Array<Souvenir>>(() => []);
	const [vendorCountry, setVendorCountry] = useState<string>(() => "");

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/souvenirs.getSouvenirs");
			const data = await res.json();
			setSouvenirs(() => data);
		})();
	}, []);

	const fetchSouvenirs = useCallback(async () => {
		const url = vendorCountry.trim() ? "http://localhost:8080/souvenirs.getSouvenirsByVendorCountry" : "http://localhost:8080/souvenirs.getSouvenirs";
		try {
			const country = vendorCountry.trim().toLowerCase();
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					vendorCountry: country ? (country[0].toUpperCase() + country.slice(1)) : ""
				})
			});
			const data = await res.json();
			setSouvenirs(() => data);
		} catch(e) {
			console.error(e);
			setSouvenirs(() => []);
		}
	}, [vendorCountry]);

	return (
		<div className="taskContainer">
			<h2>Задание 2</h2>
			<p>Вывести информацию о сувенирах, произведенных в заданной стране.</p>
			<div className="controls">
				<input value={vendorCountry} onChange={event => setVendorCountry(() => event.target.value)} type="text" placeholder="Страна производителя"/>
				<button onClick={() => fetchSouvenirs()}>Получить сувениры</button>
			</div>
			<div className="souvenirCards">
				{souvenirs.map(souvenir => <SouvenirCard key={souvenir.id} souvenir={souvenir}/>)}
			</div>
		</div>
	);
}