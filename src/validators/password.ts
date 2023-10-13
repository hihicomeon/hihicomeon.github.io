import {
	AT_LEAST_ONE_LETTER,
	AT_LEAST_ONE_NUMBER,
	BLANK_REGEX
} from '../utils/regex'

export const validatePassword = (v: string) => {
	if (!v) {
		return Promise.reject('请输入密码')
	}

	if (BLANK_REGEX.test(v)) {
		return Promise.reject('请勿输入空格')
	}

	if (v.length < 8) {
		return Promise.reject('密码长度至少8位')
	}

	if (!(AT_LEAST_ONE_LETTER.test(v) && AT_LEAST_ONE_NUMBER.test(v))) {
		return Promise.reject('密码至少包含数字和字母')
	}

	return Promise.resolve()
}

export const validateVerificationPassword = (
	value: string,
	password: string
) => {
	if (!value) {
		return Promise.reject('请输入确认密码')
	}
	if (BLANK_REGEX.test(value)) {
		return Promise.reject('请勿输入空格')
	}
	if (value !== password) {
		return Promise.reject('重置密码与确认密码不一致,请确认!')
	}

	return Promise.resolve()
}
