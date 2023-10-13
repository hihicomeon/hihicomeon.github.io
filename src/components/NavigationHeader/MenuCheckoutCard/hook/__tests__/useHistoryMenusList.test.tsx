import { useHistoryMenusList } from '../useHistoryMenusList'
import { renderHook } from '@testing-library/react'

jest.mock('../useLocalHistoryMenusList.tsx', () => ({
	useLocalHistoryMenusList: () => [
		[
			{
				pathname: '/drivers/external',
				path: '/drivers/external',
				title: '外协运力',
				search: ''
			},
			{
				pathname: '/drivers/internal',
				path: '/drivers/internal',
				title: '自有运力',
				search: ''
			},

			{
				pathname: '/carriers',
				path: '/carriers',
				title: '承运商管理',
				search: ''
			}
		]
	]
}))

it('期望获取到历史路由信息', () => {
	const { result } = renderHook(() => useHistoryMenusList([]))

	const [data] = result.current

	expect(data.historyMenus).toEqual([
		{
			pathname: '/drivers/external',
			path: '/drivers/external',
			title: '外协运力',
			search: ''
		},
		{
			pathname: '/drivers/internal',
			path: '/drivers/internal',
			title: '自有运力',
			search: ''
		},

		{
			pathname: '/carriers',
			path: '/carriers',
			title: '承运商管理',
			search: ''
		}
	])
})
