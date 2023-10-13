import { UserPageConfigDrawer } from '../index'
import { render, screen } from '@testing-library/react'

it('期望用户操作弹框文案展示正常', () => {
	render(<UserPageConfigDrawer open onCancel={jest.fn()} />)

	expect(screen.getByText('页面设置')).toBeInTheDocument()
})
