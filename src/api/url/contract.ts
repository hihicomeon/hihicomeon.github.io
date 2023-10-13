export const contract = {
	searchList: '/tenant/deal/contract/search',
	signContract: (id: string) => `/tenant/deal/${id}/sign-contract`,
	signDetail: (id: string) => `/tenant/deal/contract/${id}/sign-details`,
	contractDetail: (id: string) => `/tenant/deal/${id}/contract`
}
