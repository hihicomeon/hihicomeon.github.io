import { renderHook } from '@testing-library/react'
import { useSelectMenus } from '../useSelectMenus'

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		hash: '',
		key: '8x213h9u',
		pathname: '/drivers/external',
		search: '',
		state: null
	})
}))

jest.mock('../../utils/utils.ts', () => ({
	extractMenusTree: () => [
		{
			code: 'EXTERNAL_ALL',
			path: '/drivers/external',
			title: '外协运力'
		},
		{
			code: 'INTERNAL_DRIVERS_AND_CARS',
			path: '/drivers/internal',
			title: '自有运力'
		}
	]
}))

it('期望获取到对应的路由信息', () => {
	const { result } = renderHook(() => useSelectMenus())

	const [data] = result.current

	expect(data.routeData).toEqual({
		code: 'EXTERNAL_ALL',
		path: '/drivers/external',
		title: '外协运力'
	})

	expect(data.location).toEqual({
		hash: '',
		key: '8x213h9u',
		pathname: '/drivers/external',
		search: '',
		state: null
	})
})
