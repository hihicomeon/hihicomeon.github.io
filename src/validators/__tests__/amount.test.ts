import { getAmountValidator } from '../amount'

it('期望展示请输入付款金额,当没有值时', async function () {
	await expect(
		getAmountValidator(10, '付款金额', 1)({}, undefined, jest.fn)
	).rejects.toEqual('请输入付款金额')
})

it('期望展示请正确输入金额,当值为非数值时', async function () {
	await expect(
		getAmountValidator(10, '付款金额', 1)({}, 'aa', jest.fn)
	).rejects.toEqual('请正确输入金额')
})

it('期望展示付款金额不能高于待付款金额,当金额高于待付款金额', async function () {
	await expect(
		getAmountValidator(10, '付款金额', 99)({}, '99', jest.fn)
	).rejects.toEqual('付款金额不能高于待付款金额')
})

it('期望展示undefine,当所有值正常时', async function () {
	await expect(
		getAmountValidator(10, '付款金额', 7)({}, '99', jest.fn)
	).resolves.toEqual(undefined)
})
