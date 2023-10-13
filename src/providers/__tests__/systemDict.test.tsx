// import { SystemDictProvider } from '../systemDict'
// import { render, screen } from '@testing-library/react'

// jest.mock('../../hooks/useAvailableSystemDict', () => ({
// 	useAvailableSystemDict: () => ({
// 		data: []
// 	})
// }))

// afterEach(() => {
// 	jest.clearAllMocks()
// })

// describe('SystemDictProvider', () => {
// 	it('期望返回被包裹组件,当需要进行SystemDictProvider包裹时', () => {
// 		render(
// 			<SystemDictProvider>
// 				<div>测试SystemDictProvider</div>
// 			</SystemDictProvider>
// 		)

// 		expect(screen.getByText('测试SystemDictProvider')).toBeInTheDocument()
// 	})
// })
