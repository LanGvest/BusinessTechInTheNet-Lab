import {getCountryFlagUrl} from "../utils/helpers";
import {Vendor} from "../types/vendor.type";
import {getReleaseDate} from "../utils/helpers";

interface Props {
	vendor: Vendor
}

export default function VendorCard({vendor}: Props): JSX.Element {
	const flagUrl = getCountryFlagUrl(vendor.country);

	return (
		<div className="vendorCard">
			<div className="name">
				<span>{vendor.name}</span>
				<div className="country">
					<p>{vendor.country}</p>
					{flagUrl && <div className="flag" style={{
						backgroundImage: `url(${flagUrl})`
					}}/>}
				</div>
			</div>
			<p className="hint">Каталог сувениров ({vendor.souvenirs.length}):</p>
			<div className="catalog">
				{vendor.souvenirs.map(souvenir => (
					<div key={souvenir.id} className="catalogItem">
						<p>{souvenir.name}</p>
						<span className="price">{souvenir.price.toFixed(2)} BYN</span>
						<p className="hint">{getReleaseDate(souvenir.releaseDate)}</p>
					</div>
				))}
			</div>
		</div>
	);
}