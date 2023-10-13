// import { ActuatorProvider } from '../actuatorToggle'
// import { render, screen } from '@testing-library/react'

// jest.mock('../../apis/actuator', () => ({
// 	useActuator: () => [{ data: [{ test: '1' }] }]
// }))

// afterEach(() => {
// 	jest.clearAllMocks()
// })

// describe('ActuatorProvider', () => {
// 	it('期望返回被包裹组件,当需要进行ActuatorProvider包裹时', () => {
// 		render(
// 			<ActuatorProvider>
// 				<div>测试组件</div>
// 			</ActuatorProvider>
// 		)

// 		expect(screen.getByText('测试组件')).toBeInTheDocument()
// 	})
// })
