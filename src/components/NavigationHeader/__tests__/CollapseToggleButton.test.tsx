import { fireEvent, render, screen } from '@testing-library/react'
import { CollapseToggleButton } from '../CollapseToggleButton'

it('should render unfold menu when collapsed', function () {
	render(<CollapseToggleButton collapsed onChange={jest.fn()} />)

	expect(screen.getByTestId('fold')).toBeDefined()
})

it('should render fold menu when not collapsed', function () {
	render(<CollapseToggleButton collapsed={false} onChange={jest.fn()} />)

	expect(screen.getByTestId('unfold')).toBeDefined()
})

it('should trigger event with false when click unfold', () => {
	const spy = jest.fn()
	render(<CollapseToggleButton collapsed onChange={spy} />)

	fireEvent.click(screen.getByTestId('fold'))

	expect(spy).toBeCalledWith(false)
})

it('should trigger event with true when click fold', () => {
	const spy = jest.fn()
	render(<CollapseToggleButton collapsed={false} onChange={spy} />)

	fireEvent.click(screen.getByTestId('unfold'))

	expect(spy).toBeCalledWith(true)
})
