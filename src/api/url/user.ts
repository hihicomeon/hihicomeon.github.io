export const user = {
	login: '/tenant/identity/auth/sign-in',
	getUserInfo: '/tenant/identity/profile',
	sendCode: (phone: string) => `/system/sms/${phone}/send`,
	resetPwd: '/tenant/identity/passwd/reset '
}
