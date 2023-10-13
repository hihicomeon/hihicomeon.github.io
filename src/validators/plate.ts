import { Validator } from '@/types'
import { PLATE_REGEX } from '../utils/regex'

export const validateLicensePlate: Validator = (_, v: string) => {
	if (!v) {
		return Promise.reject('请输入车牌号')
	}

	return PLATE_REGEX.test(v)
		? Promise.resolve()
		: Promise.reject('请输入正确的车牌号')
}
