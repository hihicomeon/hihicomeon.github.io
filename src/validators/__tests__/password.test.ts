import { validatePassword, validateVerificationPassword } from '../password'

it('should resolve given valid password', async () => {
	await expect(validatePassword('test1234')).resolves.toBe(undefined)
})

it('should reject given blank character', async () => {
	await expect(validatePassword(' 1991')).rejects.toBe('请勿输入空格')
})

it('should reject given length < 8', async () => {
	await expect(validatePassword('1991')).rejects.toBe('密码长度至少8位')
})

it('should reject given matched password rule < 2', async () => {
	await expect(validatePassword('19911999')).rejects.toBe(
		'密码至少包含数字和字母'
	)
	await expect(validatePassword('showshow')).rejects.toBe(
		'密码至少包含数字和字母'
	)
})

it('should reject given empty password', async () => {
	await expect(validatePassword('')).rejects.toBe('请输入密码')
})

describe('确认密码测试用例', () => {
	it('确认密码是否与重置密码是否一致', async () => {
		await expect(
			validateVerificationPassword('test1234', 'text1234')
		).rejects.toBe('重置密码与确认密码不一致,请确认!')
	})

	it('确认密码未填写时', async () => {
		await expect(validateVerificationPassword('', 'test1234')).rejects.toBe(
			'请输入确认密码'
		)
	})

	it('确认密码与重置密码一致', async () => {
		await expect(
			validateVerificationPassword('qqqq1111', 'qqqq1111')
		).resolves.toBe(undefined)
	})
})
