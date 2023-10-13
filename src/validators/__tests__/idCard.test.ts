import { RuleObject } from 'antd/lib/form'
import { validateIdCard, validateOptionalIdCard } from '../idCard'

describe('validateIdCard', () => {
	it('should resolve given idCard length == 18', async () => {
		await expect(
			validateIdCard({} as RuleObject, '420983199106102434', jest.fn())
		).resolves.toBe(undefined)
	})

	it('should reject given phone length != 18', async () => {
		await expect(
			validateIdCard({} as RuleObject, '1923950289267', jest.fn())
		).rejects.toBe('请输入正确身份证号')
	})

	it('should reject given phone length = 15', async () => {
		await expect(
			validateIdCard({} as RuleObject, '410134199802239', jest.fn())
		).rejects.toBe('请输入正确身份证号')
	})

	it('should reject given empty phone number', async () => {
		await expect(validateIdCard({} as RuleObject, '', jest.fn())).rejects.toBe(
			'请输入身份证号'
		)
	})
})

describe('validateOptionalPhoneNumber', () => {
	it('should resolve given idCard length == 18', async () => {
		await expect(
			validateOptionalIdCard({} as RuleObject, '42098319910610243x', jest.fn())
		).resolves.toBe(undefined)
	})

	it('should reject given idCard length != 18', async () => {
		await expect(
			validateOptionalIdCard({} as RuleObject, '42098319910610243', jest.fn())
		).rejects.toBe('请输入正确身份证号')
	})

	it('should resolve given empty idCard number', async () => {
		await expect(
			validateOptionalIdCard({} as RuleObject, '', jest.fn())
		).resolves.toBe(undefined)
	})
})
