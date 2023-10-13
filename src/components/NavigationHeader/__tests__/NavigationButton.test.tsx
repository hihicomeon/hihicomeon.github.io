import { NavigationButton } from '../NavigationButton'
import { render, screen } from '@testing-library/react'

it('期望传入参数展示正常,当使用该组件时', () => {
	render(<NavigationButton selected={false}>测试文本</NavigationButton>)

	expect(screen.getByText('测试文本')).toBeInTheDocument()
})
