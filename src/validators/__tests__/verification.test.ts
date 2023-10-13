import { RuleObject } from 'antd/lib/form'
import { validateVerificationNumber } from '../verification'

describe('validateVerificationNumber', () => {
	it('期望校验通过,当为纯数字的输入时', async () => {
		await expect(
			validateVerificationNumber({} as RuleObject, '896587', jest.fn())
		).resolves.toBe(undefined)
	})

	it('期望校验不通过,当为不合规的输入时', async () => {
		await expect(
			validateVerificationNumber({} as RuleObject, '896.87', jest.fn())
		).rejects.toBe('请输入正确验证码')

		await expect(
			validateVerificationNumber({} as RuleObject, undefined, jest.fn())
		).rejects.toBe('请输入验证码')
	})
})
