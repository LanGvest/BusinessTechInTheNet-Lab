export interface Vendor {
	id: number
	name: string
	country: string
	souvenirs: Array<{
		id: number
		name: string
		price: number
		releaseDate: string
	}>
}