// import { WaybillDetailResponse } from '../apis/waybill'
// import { PaymentEnum } from '../consts/paymentType'
// import { AmountType, AmountTypeDict } from '../consts/price'
// import { AmountResponseKey } from '../features/waybill/consts'
// import { Validator } from '../types'
// import { toCurrency } from '../utils/currency'
// import { toNumber } from '../utils/number'
// import { isNilOrEmpty } from '../utils/utils'

// const getMaxAmount = (
// 	waybill: WaybillDetailResponse,
// 	payment: PaymentEnum,
// 	amount: AmountType
// ) => waybill[AmountResponseKey[payment][amount]]

// export const getAnomalyPriceAmountValidator =
// 	(
// 		waybill: WaybillDetailResponse,
// 		paymentType?: PaymentEnum,
// 		amountType?: AmountType,
// 		isRequire?: boolean
// 	): Validator =>
// 	(_, value: string) => {
// 		if (isNilOrEmpty(value)) {
// 			return !isRequire ? Promise.resolve() : Promise.reject('请输入调整金额')
// 		}

// 		if (value !== undefined && toNumber(value) === 0) {
// 			return Promise.reject('调整金额不能为0')
// 		}

// 		if (!paymentType || !amountType) {
// 			return Promise.resolve()
// 		}

// 		const maxAmount = getMaxAmount(waybill, paymentType, amountType) ?? 0
// 		const currentValue = Number.parseFloat(value)
// 		const amountTypeText = AmountTypeDict[amountType]

// 		return currentValue + maxAmount < 0
// 			? Promise.reject(
// 					`调整金额超过${amountTypeText}当前金额(${toCurrency(maxAmount)}元)`
// 			  )
// 			: Promise.resolve()
// 	}

// export function validateAnomalyPriceAmount(value: string, minValue = 0) {
// 	if (!value) {
// 		return Promise.resolve()
// 	}

// 	if (value !== undefined && toNumber(value) === 0) {
// 		return Promise.reject('调整金额不能为0')
// 	}

// 	if (toNumber(value) < 0 && minValue + toNumber(value) < 0) {
// 		return Promise.reject('调整金额不能超出可调整金额')
// 	}

// 	return Promise.resolve()
// }
