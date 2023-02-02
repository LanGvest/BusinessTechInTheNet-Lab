import {useCallback, useEffect, useState} from "react";
import {Vendor} from "../types/vendor.type";
import VendorCard from "../components/vendorCard";

export default function Task5(): JSX.Element {
	const [vendors, setVendors] = useState<Array<Vendor>>(() => []);
	const [vendorName, setVendorName] = useState<string>(() => "");

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/vendors.getVendors");
			const data = await res.json();
			setVendors(() => data);
		})();
	}, []);

	const deleteVendor = useCallback(async () => {
		try {
			if(vendorName.trim()) await fetch("http://localhost:8080/vendors.deleteVendorByName", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					vendorName: vendorName.trim()
				})
			});
			const res = await fetch("http://localhost:8080/vendors.getVendors");
			const data = await res.json();
			setVendors(() => data);
		} catch(e) {
			console.error(e);
			setVendors(() => []);
		}
	}, [vendorName]);

	const reset = useCallback(async () => {
		try {
			await fetch("http://localhost:8080/app.reset");
			const res = await fetch("http://localhost:8080/vendors.getVendors");
			const data = await res.json();
			setVendors(() => data);
		} catch(e) {
			console.error(e);
			setVendors(() => []);
		}
	}, []);

	return (
		<div className="taskContainer">
			<h2>Задание 5</h2>
			<p>Удалить заданного производителя и его сувениры.</p>
			<div className="controls">
				<input value={vendorName} onChange={event => setVendorName(() => event.target.value)} type="text" placeholder="Производитель"/>
				<button style={{background: "#ff3048"}} onClick={deleteVendor}>Удалить производителя</button>
				<button onClick={reset}>Восстановить БД</button>
			</div>
			<div className="vendorCards">
				{vendors.map(vendor => <VendorCard key={vendor.id} vendor={vendor}/>)}
			</div>
		</div>
	);
}