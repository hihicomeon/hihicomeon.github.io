export const account = {
	getUserList: '/tenant/user/search',
	addUser: '/tenant/user',
	deluser: (id: string) => `/tenant/user/${id}/delete`,
	toggleEnable: (id: string) => `/tenant/user/${id}/enable`
}
