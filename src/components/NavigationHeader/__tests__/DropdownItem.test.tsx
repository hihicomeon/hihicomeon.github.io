import { render, screen } from '@testing-library/react'
import { DropdownItem } from '../DropdownItem'

it('期望下拉项显示正常，当下拉项渲染时', () => {
	render(<DropdownItem onClick={jest.fn} icon={<></>} text='testText' />)

	expect(screen.getByText('testText')).toBeInTheDocument()
})
