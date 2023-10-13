import { PHONE_NUMBER_REGEX } from '@/utils/regex'
import { Validator } from '@/types/index'

export const validatePhoneNumber: Validator = (_, v: string) => {
	if (!v) {
		return Promise.reject('请输入手机号码')
	}

	return PHONE_NUMBER_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确手机号')
}

export const validateOptionalPhoneNumber: Validator = (_, v: string) => {
	if (!v) {
		return Promise.resolve()
	}

	return PHONE_NUMBER_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确手机号')
}
