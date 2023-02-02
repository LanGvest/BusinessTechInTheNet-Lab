import {Souvenir} from "../types/souvenir.type";
import {getCountryFlagUrl, getReleaseDate} from "../utils/helpers";

interface Props {
	souvenir: Souvenir
}

export default function SouvenirCard({souvenir}: Props): JSX.Element {
	const flagUrl = getCountryFlagUrl(souvenir.vendor.country);

	return (
		<div className="souvenirCard">
			<div className="name">
				<p>{souvenir.name}</p>
				<span className="price">{souvenir.price.toFixed(2)} BYN</span>
			</div>
			<div style={{flex: 1}}>
				<p><span className="hint">Дата выпуска:</span> {getReleaseDate(souvenir.releaseDate)}</p>
				<p style={{marginTop: "5px"}}><span className="hint">Производитель:</span> {souvenir.vendor.name}</p>
			</div>
			<div className="country" style={{marginTop: "10px"}}>
				<p>{souvenir.vendor.country}</p>
				{flagUrl && <div className="flag" style={{
					backgroundImage: `url(${flagUrl})`
				}}/>}
			</div>
		</div>
	);
}