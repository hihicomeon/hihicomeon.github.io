import { HistoryRouteCard } from '../index'
import { render, screen } from '@testing-library/react'

it('期望历史路由开关文案展示正常', () => {
	render(<HistoryRouteCard />)

	expect(screen.getByText('布局设置')).toBeInTheDocument()

	expect(screen.getByText('系统多标签栏Tab页')).toBeInTheDocument()

	expect(screen.getByTestId('history-route-switch')).toBeInTheDocument()
})
