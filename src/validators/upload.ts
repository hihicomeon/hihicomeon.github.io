import { Validator } from '../types'

export type uploadUrlType = {
	url?: string
	uid?: string
	status?: 'done' | 'uploading' | 'error'
	name?: string
	response?: {
		objectKey?: string
	}
}

export const validateUpload: Validator = (_, data: uploadUrlType) => {
	if (Array.isArray(data) && data.length > 0) {
		if (data.some((v) => v.status === 'uploading')) {
			return Promise.reject('上传中')
		}
		if (data.some((v) => v.status === 'error')) {
			return Promise.reject('上传失败 请重新上传')
		}
	}
	return Promise.resolve()
}

export const validateUploadRequired: Validator = (_, data: uploadUrlType) => {
	if (!data || (Array.isArray(data) && data.length === 0)) {
		return Promise.reject('请上传附件')
	}

	if (Array.isArray(data) && data.length > 0) {
		if (data.some((v) => v.status === 'uploading')) {
			return Promise.reject('上传中')
		}
		if (data.some((v) => v.status === 'error')) {
			return Promise.reject('上传失败 请重新上传')
		}
	}
	return Promise.resolve()
}
