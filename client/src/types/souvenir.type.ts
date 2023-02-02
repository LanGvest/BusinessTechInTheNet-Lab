export interface Souvenir {
	id: number
	name: string
	price: number
	releaseDate: string
	vendor: {
		id: number
		name: string
		country: string
	}
}