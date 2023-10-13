import { RuleObject } from 'antd/lib/form'
import { validateOptionalPhoneNumber, validatePhoneNumber } from '../phone'

describe('validatePhoneNumber', () => {
	it('should resolve given phone start with 1 and length == 11', async () => {
		await expect(
			validatePhoneNumber({} as RuleObject, '19950289267', jest.fn())
		).resolves.toBe(undefined)
	})

	it('should reject given phone not start with 1', async () => {
		await expect(
			validatePhoneNumber({} as RuleObject, '29950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should reject given phone length != 11', async () => {
		await expect(
			validatePhoneNumber({} as RuleObject, '1923950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should reject given phone length != 11 and not start with 1', async () => {
		await expect(
			validatePhoneNumber({} as RuleObject, '2923950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should reject given empty phone number', async () => {
		await expect(
			validatePhoneNumber({} as RuleObject, '', jest.fn())
		).rejects.toBe('请输入手机号')
	})
})

describe('validateOptionalPhoneNumber', () => {
	it('should resolve given phone start with 1 and length == 11', async () => {
		await expect(
			validateOptionalPhoneNumber({} as RuleObject, '19950289267', jest.fn())
		).resolves.toBe(undefined)
	})

	it('should reject given phone not start with 1', async () => {
		await expect(
			validateOptionalPhoneNumber({} as RuleObject, '29950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should reject given phone length != 11', async () => {
		await expect(
			validateOptionalPhoneNumber({} as RuleObject, '1923950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should reject given phone length != 11 and not start with 1', async () => {
		await expect(
			validateOptionalPhoneNumber({} as RuleObject, '2923950289267', jest.fn())
		).rejects.toBe('请输入正确手机号')
	})

	it('should resolve given empty phone number', async () => {
		await expect(
			validateOptionalPhoneNumber({} as RuleObject, '', jest.fn())
		).resolves.toBe(undefined)
	})
})
