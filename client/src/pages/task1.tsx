import {useCallback, useEffect, useState} from "react";
import {Souvenir} from "../types/souvenir.type";
import SouvenirCard from "../components/souvenirCard";

export default function Task1(): JSX.Element {
	const [souvenirs, setSouvenirs] = useState<Array<Souvenir>>(() => []);
	const [vendorName, setVendorName] = useState<string>(() => "");

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/souvenirs.getSouvenirs");
			const data = await res.json();
			setSouvenirs(() => data);
		})();
	}, []);

	const fetchSouvenirs = useCallback(async () => {
		const url = vendorName.trim() ? "http://localhost:8080/souvenirs.getSouvenirsByVendorName" : "http://localhost:8080/souvenirs.getSouvenirs";
		try {
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					vendorName: vendorName.trim()
				})
			});
			const data = await res.json();
			setSouvenirs(() => data);
		} catch(e) {
			console.error(e);
			setSouvenirs(() => []);
		}
	}, [vendorName]);

	return (
		<div className="taskContainer">
			<h2>Задание 1</h2>
			<p>Вывести информацию о сувенирах заданного производителя.</p>
			<div className="controls">
				<input value={vendorName} onChange={event => setVendorName(() => event.target.value)} type="text" placeholder="Производитель"/>
				<button onClick={() => fetchSouvenirs()}>Получить сувениры</button>
			</div>
			<div className="souvenirCards">
				{souvenirs.map(souvenir => <SouvenirCard key={souvenir.id} souvenir={souvenir}/>)}
			</div>
		</div>
	);
}