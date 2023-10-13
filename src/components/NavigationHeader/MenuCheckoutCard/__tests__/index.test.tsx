import { MenuCheckoutCard } from '../index'
import { render, screen } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
	useLocation: () => ({
		hash: '',
		key: '8x213h9u',
		pathname: '/drivers/external',
		search: '',
		state: null
	})
}))

jest.mock('../hook/useLocalHistoryMenusList.tsx', () => ({
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

it('期望路由卡片按钮展示正常,当展示路由卡片时', () => {
	render(<MenuCheckoutCard />)

	expect(screen.getByTestId('route-del-icon')).toBeInTheDocument()
})
