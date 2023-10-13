import { RuleObject } from 'antd/lib/form'
import { validateLicensePlate } from '../plate'

describe('测试车牌号码验证', () => {
	it('车牌号正确,通过校验', async () => {
		await expect(
			validateLicensePlate({} as RuleObject, '京A88888', jest.fn())
		).resolves.toBe(undefined)
	})

	it('车牌号个数不正确,不通过校验', async () => {
		await expect(
			validateLicensePlate({} as RuleObject, '京A8888', jest.fn())
		).rejects.toBe('请输入正确的车牌号')
	})

	it('不输入车牌,返回异常', async () => {
		await expect(
			validateLicensePlate({} as RuleObject, '', jest.fn())
		).rejects.toBe('请输入车牌号')
	})
})
