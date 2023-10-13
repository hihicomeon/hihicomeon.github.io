import { NUMBER_REGEX } from '../utils/regex'
import { Validator } from '../types'

export const getAmountValidator =
	(
		pendingAmount: number,
		amountTypeLabel: string,
		totalAmount: number
	): Validator =>
	(_, v: string) => {
		if (!v) {
			return Promise.reject(`请输入${amountTypeLabel}`)
		}

		const amount = Number.parseFloat(v)
		if (!NUMBER_REGEX.test(v) || Number.isNaN(amount) || amount < 0) {
			return Promise.reject('请正确输入金额')
		}

		return totalAmount > pendingAmount
			? Promise.reject(`${amountTypeLabel}不能高于待${amountTypeLabel}`)
			: Promise.resolve()
	}
