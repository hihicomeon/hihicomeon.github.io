import { extractMenusTree, flattenTree } from '../utils'

jest.mock('../../../../../consts/menu', () => ({
	Menus: [
		{
			title: '个人信息',
			path: '/profile',
			hidden: true
		},
		{
			title: '受理开单',
			path: 'order',
			children: [
				{
					title: '创建受理单',
					path: '/orders/create'
				},
				{
					title: '常用信息',
					path: '/orders/frequenty-info'
				}
			]
		}
	]
}))

afterEach(() => {
	jest.clearAllMocks()
})

it('期望将对应路由扁平化,当使用扁平化方法时2', () => {
	const menus = extractMenusTree()

	expect(menus).toEqual([
		{ title: '个人信息', path: '/profile', hidden: true },
		{ title: '受理开单', path: 'order' },
		{ title: '创建受理单', path: '/orders/create' },
		{ title: '常用信息', path: '/orders/frequenty-info' }
	])
})

it('期望传入路由扁平化正常,当使用扁平化方法时', () => {
	const menus = [
		{
			title: '个人信息',
			path: '/profile',
			hidden: true
		},
		{
			title: '受理开单',
			path: 'order',
			children: [
				{
					title: '创建受理单',
					path: '/orders/create'
				},
				{
					title: '常用信息',
					path: '/orders/frequenty-info'
				}
			]
		}
	]

	expect(flattenTree(menus)).toEqual([
		{ title: '个人信息', path: '/profile', hidden: true },
		{ title: '受理开单', path: 'order' },
		{ title: '创建受理单', path: '/orders/create' },
		{ title: '常用信息', path: '/orders/frequenty-info' }
	])
})
