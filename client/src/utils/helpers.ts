type AllowedCountries = "Россия" | "Япония" | "Франция" | "Беларусь" | "Китай" | "Англия";

type CountryFlagUrls = {
	[countryName in AllowedCountries]: string
};

const countryFlagUrls: CountryFlagUrls = {
	"Англия": "https://flagicons.lipis.dev/flags/4x3/gb.svg",
	"Беларусь": "https://flagicons.lipis.dev/flags/4x3/by.svg",
	"Китай": "https://flagicons.lipis.dev/flags/4x3/cn.svg",
	"Россия": "https://flagicons.lipis.dev/flags/4x3/ru.svg",
	"Франция": "https://flagicons.lipis.dev/flags/4x3/fr.svg",
	"Япония": "https://flagicons.lipis.dev/flags/4x3/jp.svg"
};

export function getCountryFlagUrl(countryName: string): string | null {
	return countryFlagUrls[countryName as AllowedCountries] || null;
}

export function getReleaseDate(value: string): string {
	const releaseDate = new Date(value);
	return `${releaseDate.getDate().toString().padStart(2, "0")}.${(releaseDate.getMonth()+1).toString().padStart(2, "0")}.${releaseDate.getFullYear()}`;
}