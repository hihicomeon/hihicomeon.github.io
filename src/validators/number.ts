import { Validator } from '@/types'
import { NUMBER_INTEGER } from '@/utils/regex'

export const validateNumber: Validator = (_, v: string) => {
	if (!NUMBER_INTEGER.test(v)) {
		return Promise.reject('请输数字')
	}
	if (Number(v) === 0) {
		return Promise.reject('请输入大于0的数字')
	}
	if (v.length > 3) {
		return Promise.reject('最大长度不能超过3位')
	}
	return Promise.resolve()
}

export const validateNumberCanBeNull: Validator = (_, v: string) => {
	if (!v) {
		return Promise.resolve()
	}
	if (v.length > 3) {
		return Promise.reject('最大长度不能超过3位')
	}
	if (Number(v) === 0) {
		return Promise.resolve()
	}
	if (!NUMBER_INTEGER.test(v)) {
		return Promise.reject('请输正整数数字')
	}
	return Promise.resolve()
}

export const validateBIGINT: Validator = (_, v: string) => {
	if (!v) {
		return Promise.resolve()
	}
	if (!NUMBER_INTEGER.test(v)) {
		return Promise.reject('请输数字')
	}
	if (Number(v) === 0) {
		return Promise.reject('请输入大于0的数字')
	}
	if (v.length > 9) {
		return Promise.reject('最大长度不能超过9位')
	}
	return Promise.resolve()
}
