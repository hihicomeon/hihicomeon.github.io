import { UserPageConfigProvider } from '../userPageConfig'
import { render, screen } from '@testing-library/react'

describe('UserPageConfigProvider', () => {
	it('期望返回被包裹组件,当需要进行UserPageConfigProvider包裹时', () => {
		render(
			<UserPageConfigProvider>
				<div>测试组件</div>
			</UserPageConfigProvider>
		)

		expect(screen.getByText('测试组件')).toBeInTheDocument()
	})
})
