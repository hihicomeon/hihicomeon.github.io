import { toNumber } from '../utils/number'
import { NEWCHIWAN_MONEY_LENGTH_REGEX } from '../utils/regex'

export function validateVerificationPriceAmount(value: string, minValue = 0) {
	if (!value) {
		return Promise.reject('请输入待调整的金额')
	}

	if (value.slice(-1) === '.') {
		return Promise.reject('请输入正确的数值')
	}

	if (toNumber(value) < 0 && minValue + toNumber(value) < 0) {
		return Promise.reject('调整金额不能超出可调整金额')
	}

	return Promise.resolve()
}

export function validateNewChiwanVerificationPriceAmount(
	value: string,
	minValue = 0
) {
	if (!value) {
		return Promise.reject('请输入待调整的金额')
	}

	if (value.slice(-1) === '.') {
		return Promise.reject('请输入正确的数值')
	}

	if (toNumber(value) < 0 && minValue + toNumber(value) < 0) {
		return Promise.reject('调整金额不能超出可调整金额')
	}

	if (!NEWCHIWAN_MONEY_LENGTH_REGEX.test(value.slice(1))) {
		return Promise.reject('单次调整金额不可超过99999999.99')
	}

	return Promise.resolve()
}
