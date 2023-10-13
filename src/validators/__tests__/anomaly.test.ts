// import { RuleObject } from 'antd/lib/form'
// import { WaybillDetailResponse } from '../../apis/waybill'
// import { PaymentEnum } from '../../consts/paymentType'
// import { AmountType } from '../../consts/price'
// import {
// 	getAnomalyPriceAmountValidator,
// 	validateAnomalyPriceAmount
// } from '../anomaly'

// it('should resolve given empty str', async function () {
// 	await expect(validateAnomalyPriceAmount('', 1)).resolves.toEqual(undefined)
// })

// it('should resolve given value + 10 > 0', async function () {
// 	await expect(validateAnomalyPriceAmount('1', 10)).resolves.toEqual(undefined)
// })

// it('should reject given value + 10 < 0', async function () {
// 	await expect(validateAnomalyPriceAmount('-12', 10)).rejects.toEqual(
// 		'调整金额不能超出可调整金额'
// 	)
// })

// it('should reject given value + 10 === 0', async function () {
// 	await expect(validateAnomalyPriceAmount('0', -12)).rejects.toEqual(
// 		'调整金额不能为0'
// 	)
// })

// const FakedWaybill: WaybillDetailResponse = {
// 	orderIds: ['2022082592005614'],
// 	advanceCashRevisableAmount: 0,
// 	advanceOilCardRevisableAmount: 0,
// 	deliveryCashRevisableAmount: 12.0,
// 	deliveryOilCardRevisableAmount: 12.0,
// 	finalCashRevisableAmount: 0,
// 	finalOilCardRevisableAmount: 0,
// 	amountCheckResponse: {
// 		advancePayment: null,
// 		deliveryPayment: [AmountType.Cash, AmountType.OilCard],
// 		finalPayment: null
// 	},
// 	verified: false
// }

// it('should resolved with undefined when amount and payment type and value = undefined', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		FakedWaybill,
// 		undefined,
// 		undefined
// 	)

// 	await expect(
// 		validator({} as RuleObject, undefined, jest.fn())
// 	).resolves.toEqual(undefined)
// })

// it('should resolve when amount and value not empty and payment type empty', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		FakedWaybill,
// 		undefined,
// 		undefined
// 	)

// 	await expect(validator({} as RuleObject, '0', jest.fn())).rejects.toBe(
// 		'调整金额不能为0'
// 	)
// })

// it('should resolve when under max adjustable amount', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		{ ...FakedWaybill, deliveryCashRevisableAmount: 10 },
// 		PaymentEnum.DeliveryPayment,
// 		AmountType.Cash
// 	)

// 	await expect(validator({} as RuleObject, '1', jest.fn())).resolves.toEqual(
// 		undefined
// 	)
// })

// it('should reject when overflow max adjustable amount', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		{ ...FakedWaybill, deliveryCashRevisableAmount: 10 },
// 		PaymentEnum.DeliveryPayment,
// 		AmountType.Cash
// 	)

// 	await expect(validator({} as RuleObject, '-13', jest.fn())).rejects.toEqual(
// 		'调整金额超过现金当前金额(10.00元)'
// 	)
// })

// it('should resolve when max adjustable amount = value', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		{ ...FakedWaybill, deliveryCashRevisableAmount: 10 },
// 		PaymentEnum.DeliveryPayment,
// 		AmountType.Cash
// 	)

// 	await expect(validator({} as RuleObject, '-10', jest.fn())).resolves.toEqual(
// 		undefined
// 	)
// })

// it('期望获得请输入调整金额，当isRequire为true时', async function () {
// 	const validator = getAnomalyPriceAmountValidator(
// 		FakedWaybill,
// 		PaymentEnum.DeliveryPayment,
// 		AmountType.Cash,
// 		true
// 	)

// 	await expect(
// 		validator({} as RuleObject, undefined, jest.fn())
// 	).rejects.toEqual('请输入调整金额')
// })
