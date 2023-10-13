import { Validator } from '../types'
import { VERIFICATION_NUMBER_REGEX } from '../utils/regex'

export const validateVerificationNumber: Validator = (_, v: string) => {
	if (!v) {
		return Promise.reject('请输入验证码')
	}

	return VERIFICATION_NUMBER_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确验证码')
}
