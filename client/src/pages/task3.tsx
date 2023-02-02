import {useCallback, useEffect, useState} from "react";
import {Vendor} from "../types/vendor.type";
import VendorCard from "../components/vendorCard";

export default function Task3(): JSX.Element {
	const [vendors, setVendors] = useState<Array<Vendor>>(() => []);
	const [maxPriceValue, setMaxPriceValue] = useState<string>(() => "");

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/vendors.getVendors");
			const data = await res.json();
			setVendors(() => data);
		})();
	}, []);

	const fetchVendors = useCallback(async () => {
		const url = /^\d+([.,]\d{1,2})?$/.test(maxPriceValue.trim()) ? "http://localhost:8080/vendors.getVendorsUpToSouvenirsMaxPrice" : "http://localhost:8080/vendors.getVendors";
		try {
			const maxPrice = Number(maxPriceValue.trim().replace(",", "."));
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					maxPrice
				})
			});
			const data = await res.json();
			setVendors(() => data);
		} catch(e) {
			console.error(e);
			setVendors(() => []);
		}
	}, [maxPriceValue]);

	return (
		<div className="taskContainer">
			<h2>Задание 3</h2>
			<p>Вывести информацию о производителях, чьи цены на сувениры меньше заданной.</p>
			<div className="controls">
				<input style={{width: "220px"}} value={maxPriceValue} onChange={event => setMaxPriceValue(() => event.target.value)} type="string" placeholder="Максимальная цена"/>
				<button onClick={fetchVendors}>Получить производителей</button>
			</div>
			<div className="vendorCards">
				{vendors.map(vendor => <VendorCard key={vendor.id} vendor={vendor}/>)}
			</div>
		</div>
	);
}