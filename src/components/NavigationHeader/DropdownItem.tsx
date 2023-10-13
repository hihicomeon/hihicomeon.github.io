import { ReactNode } from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/color'

type DropdownItemProps = {
	onClick: () => void
	text: string
	icon: ReactNode
}

export const DropdownItem = ({ onClick, icon, text }: DropdownItemProps) => {
	return (
		<Wrapper onClick={onClick}>
			{icon}
			<Text>{text}</Text>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${Color.TextDarkGray};
	width: 108px;
	height: 100%;
	padding: 8px;

	&:hover {
		color: ${Color.TextLink};
	}
`

const Text = styled.span`
	margin-left: 8px;
`
