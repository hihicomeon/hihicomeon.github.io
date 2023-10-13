import { ID_CARD_REGEX } from '../utils/regex'
import { Validator } from '../types'

export const validateIdCard: Validator = (_, v: string) => {
	if (!v) {
		return Promise.reject('请输入身份证号')
	}

	return ID_CARD_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确身份证号')
}

export const validateOptionalIdCard: Validator = (_, v: string) => {
	if (!v) {
		return Promise.resolve()
	}

	return ID_CARD_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确身份证号')
}
