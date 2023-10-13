export const car = {
	searchCarList: '/tenant/vehicles/search',
	addCar: '/tenant/vehicles',
	updateCar: (id: string) => `/tenant/vehicles/${id}`,
	getCarDetail: (id: string) => `/tenant/vehicles/${id}`,
	importCar: '/tenant/vehicles/import'
}
