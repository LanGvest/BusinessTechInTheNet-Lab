import {useCallback, useEffect, useState} from "react";
import {Vendor} from "../types/vendor.type";
import VendorCard from "../components/vendorCard";

export default function Task4(): JSX.Element {
	const [vendors, setVendors] = useState<Array<Vendor>>(() => []);
	const [souvenirName, setSouvenirName] = useState<string>(() => "");
	const [souvenirReleaseYear, setSouvenirReleaseYear] = useState<string>(() => "");

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/vendors.getVendors");
			const data = await res.json();
			setVendors(() => data);
		})();
	}, []);

	const fetchVendors = useCallback(async () => {
		const url = souvenirName.trim() && /^\d{4}$/.test(souvenirReleaseYear.trim()) ? "http://localhost:8080/vendors.getVendorsBySouvenirNameAndReleaseYear" : "http://localhost:8080/vendors.getVendors";
		try {
			const name = souvenirName.trim().toLowerCase();
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					souvenirName: name ? (name[0].toUpperCase() + name.slice(1)) : "",
					souvenirReleaseYear: Number(souvenirReleaseYear)
				})
			});
			const data = await res.json();
			setVendors(() => data);
		} catch(e) {
			console.error(e);
			setVendors(() => []);
		}
	}, [souvenirName, souvenirReleaseYear]);

	return (
		<div className="taskContainer">
			<h2>Задание 4</h2>
			<p>Вывести информацию о производителях заданного сувенира, произведенного в заданном году.</p>
			<div className="controls">
				<input value={souvenirName} onChange={event => setSouvenirName(() => event.target.value)} type="string" placeholder="Сувенир"/>
				<input style={{width: "220px"}} value={souvenirReleaseYear} onChange={event => setSouvenirReleaseYear(() => event.target.value)} type="string" placeholder="Год выпуска"/>
				<button onClick={fetchVendors}>Получить производителей</button>
			</div>
			<div className="vendorCards">
				{vendors.map(vendor => <VendorCard key={vendor.id} vendor={vendor}/>)}
			</div>
		</div>
	);
}