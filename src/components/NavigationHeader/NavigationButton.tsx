// import { CloseSmall } from '@icon-park/react'
import { Button } from 'antd'
import { CSSProperties } from 'react'
import styled from 'styled-components'
// import { Icon } from '../Icon'

type NavigationButtonProps = {
	children: string
	selected: boolean
	onSelect?: () => void
	onClose?: () => void
	style?: CSSProperties
}

export const NavigationButton = ({
	children,
	selected,
	// onClose,
	onSelect,
	style
}: NavigationButtonProps) => (
	<StyledButton
		type={selected ? 'primary' : 'default'}
		onClick={onSelect}
		style={{
			background: !selected ? '#FAFAFC' : undefined,
			...style
		}}
	>
		<ContentWrapper>
			{children}
			{/* {!!onClose && (
				<Icon
					style={{ marginLeft: 16 }}
					Comp={CloseSmall}
					onClick={(e) => {
						e.stopPropagation()
						onClose()
					}}
				/>
			)} */}
		</ContentWrapper>
	</StyledButton>
)

const StyledButton = styled(Button)`
	height: 36px;
	border-radius: 8px;
	border: none;
`

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
`
