import {
	validateNewChiwanVerificationPriceAmount,
	validateVerificationPriceAmount
} from '../revisionPrice'

describe('validateVerificationPriceAmount', () => {
	it('当输入金额大于可调整金额,期望校验无法通过并返回错误文案', async () => {
		await expect(validateVerificationPriceAmount('-1500', 100)).rejects.toBe(
			'调整金额不能超出可调整金额'
		)
	})

	it('当输入金额未填写时,期望校验无法通过并返回错误文案', async () => {
		await expect(validateVerificationPriceAmount('', 1000)).rejects.toBe(
			'请输入待调整的金额'
		)
	})

	it('当输入金额小于可调整金额,期望校验通过', async () => {
		await expect(validateVerificationPriceAmount('-150', 1000)).resolves.toBe(
			undefined
		)
	})

	it('当输入金额以小数点结尾时,期望校验无法通过并返回错误文案', async () => {
		await expect(
			validateVerificationPriceAmount('+150000.', 1000)
		).rejects.toBe('请输入正确的数值')
	})
})

describe('validateNewChiwanVerificationPriceAmount', () => {
	it('当输入金额大于可调整金额,期望校验无法通过并返回错误文案', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('-1500', 100)
		).rejects.toBe('调整金额不能超出可调整金额')
	})

	it('当输入金额未填写时,期望校验无法通过并返回错误文案', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('', 1000)
		).rejects.toBe('请输入待调整的金额')
	})

	it('当输入金额小于可调整金额,期望校验通过', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('-150', 1000)
		).resolves.toBe(undefined)
	})

	it('当输入金额大于8位数,期望校验无法通过并返回错误文案', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('+150000000', 1000)
		).rejects.toBe('单次调整金额不可超过99999999.99')
	})

	it('当输入金额小于8位,期望校验通过', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('+15000000.55', 1000)
		).resolves.toBe(undefined)
	})

	it('当输入金额以小数点结尾时,期望校验无法通过并返回错误文案', async () => {
		await expect(
			validateNewChiwanVerificationPriceAmount('+150000.', 1000)
		).rejects.toBe('请输入正确的数值')
	})
})
