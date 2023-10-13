export interface UserInfo {
	id: string
	name: string
	admin: boolean
	tenant: TenantDetail
	avatar: ImageObj
}

export interface TenantDetail {
	id: string
	name: string
	contact: string
	phone: string
	account: string
	status: 'UNABLE' | 'ENABLE' | 'UN_VERIFIED' | 'VERIFIED'
	createdAt: string
}

export interface ImageObj {
	objectKey: string
	url: string
	thumbnail: string
}
