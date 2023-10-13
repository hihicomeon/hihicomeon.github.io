import { AuthProvider } from '../auth'
import { render, screen } from '@testing-library/react'

jest.mock('../../features/profile/apis/me', () => ({
	useCurrentUserAccounts: () => [{ data: {} }, jest.fn],
	useCurrentUser: () => [
		{ data: {} },
		jest.fn(() => Promise.resolve({ data: { currentAccountId: '' } }))
	],
	useAccountResourcesCheck: () => [{ data: {} }, jest.fn]
}))

afterEach(() => {
	jest.clearAllMocks()
})

describe('AuthProvider', () => {
	it('期望返回被包裹组件,当需要进行AuthProvider包裹且token存在时', () => {
		render(
			<AuthProvider token='233'>
				<div>测试AuthProvider</div>
			</AuthProvider>
		)

		expect(screen.getByText('测试AuthProvider')).toBeInTheDocument()
	})
})
