import axios, {
	AxiosError,
	AxiosResponse,
	AxiosInstance,
	InternalAxiosRequestConfig
} from 'axios'
import { message } from 'antd'
import { ErrorCode } from '@/consts/errorCode'

const baseURL: any = import.meta.env.VITE_BASE_URL
const service: AxiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 1000 * 60
})

const enum StatusCode {
	AuthorizedFailed = 401,
	ServiceUnavailable = 503,
	AuthorityFailed = 403,
	AccessDenied = 402
}

// 请求前的统一处理
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem('token')
		if (token && !config.data.withoutToken) {
			config.headers['Authorization '] = `Bearer ${token}`
			config.headers['x-auth-type'] = 'TENANT'
		}
		if (config.data.pageConfig) {
			const { page, size } = config.data.pageConfig
			config.headers['X-Pagination-Page'] = page
			config.headers['X-Pagination-Size'] = size
		}
		if (config.data.phoneCode) {
			const { phone, code } = config.data.phoneCode
			config.headers['X-Phone'] = phone
			config.headers['X-Code'] = code
		}
		if (config.method === 'get' && config.data) {
			delete config.data.pageConfig
			config.params = config.data
		}
		return config
	},
	(error: AxiosError) => {
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

const redirect = (route: string) => {
	window.location.href = route
}

const handleStatusCode = {
	[StatusCode.AuthorizedFailed]: () => redirect('/login'),
	[StatusCode.ServiceUnavailable]: () => redirect('/server-unavailable'),
	[StatusCode.AuthorityFailed]: () => redirect('/authority-unavailable'),
	[StatusCode.AccessDenied]: () => redirect('/login')
}

service.interceptors.response.use(
	(response: AxiosResponse<any>) => {
		const res = response.data
		if (response.status === 200) {
			if (response.headers['content-disposition']) {
				return response
			}
			return response
		} else {
			showError(res)
			return Promise.reject(res)
		}
	},
	(error: AxiosError<any>) => {
		console.log(error) // for debug
		const status = error?.response?.status as StatusCode
		const errorHandler = status && handleStatusCode[status]
		const showMsg = error.config?.headers.showMsg

		const errorCode = (error?.response?.data?.code ?? '') as string

		showMsg && showError({ message: ErrorCode[errorCode] })
		if (errorHandler) {
			setTimeout(() => {
				errorHandler()
			}, 2000)
		}
		return Promise.reject(error)
	}
)

// 错误处理
const showError = (error: any) => {
	message.error({
		content: error.message || '服务异常'
	})
}

export default service
