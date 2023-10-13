import { order } from './url/order'
import service from '@/utils/request'
import { AxiosHeaderValue, AxiosResponse } from 'axios'
import { user } from './url/user'
import { car } from './url/car'
import { upload } from './url/upload'
import { dict } from './url/dict'
import { auction } from './url/auction'
import { finance } from './url/finance'
import { account } from './url/account'
import { contract } from './url/contract'

export interface RequestList<T> {
	list?: T
	pageNo?: number
	pageSize?: number
	pages?: number
	total?: number
}
export interface RequestMessage {
	code?: string
	message?: string
	validationErrors?: any
}

export interface RequestExport {
	code?: string
	message?: string
	validationErrors?: any
}

export const requestUrls = {
	user,
	car,
	upload,
	dict,
	auction,
	finance,
	order,
	account,
	contract
} as const

export type Method =
	| 'get'
	| 'GET'
	| 'delete'
	| 'DELETE'
	| 'head'
	| 'HEAD'
	| 'options'
	| 'OPTIONS'
	| 'post'
	| 'POST'
	| 'put'
	| 'PUT'
	| 'patch'
	| 'PATCH'

export function request<T>(
	url: string,
	data?: any,
	method: Method = 'post',
	params?: any,
	responseType?: 'blob' | 'arraybuffer' | 'json',
	headers?: {
		[key: string]: AxiosHeaderValue
	},
	onUploadProgress?: (arg: any) => void | undefined
): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		service({
			url,
			method,
			data,
			params,
			responseType,
			headers: {
				...headers,
				showMsg: data.showMsg === false ? false : true
			},
			onUploadProgress
		})
			.then((res: AxiosResponse<T> | any) => {
				if (responseType === 'blob') {
					resolve(res)
				} else {
					const pageConfig = { page: 0, size: 0, total: 0 }
					if (res.headers['x-pagination-total']) {
						pageConfig.page = res.headers['x-pagination-page']
						pageConfig.size = res.headers['x-pagination-size']
						pageConfig.total = res.headers['x-pagination-total']
					}
					resolve(
						res.headers['x-pagination-total']
							? [res.data, pageConfig]
							: res.data
					)
				}
			})
			.catch((res: AxiosResponse<null>) => {
				reject(res.data)
			})
	})
}

export function awaitWrap<T, U = any>(
	promise: Promise<T>
): Promise<[U | null, T | null]> {
	return promise
		.then<[null, T]>((data: T) => [null, data])
		.catch<[U, null]>((err: any) => [err, null])
}
