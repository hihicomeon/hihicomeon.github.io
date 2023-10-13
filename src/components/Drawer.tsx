// import { Close } from '@icon-park/react'
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd'
import styled from 'styled-components'
import { FontSize, FontWeight } from '@/styles/font'

interface DrawerProps extends AntDrawerProps {
	title?: string
	onClose: () => void
	isClose?: boolean
}

export const Drawer = ({
	title,
	onClose,
	isClose = false,
	...rest
}: DrawerProps) => (
	<AntDrawer
		headerStyle={
			title
				? {
						border: 'none',
						padding: 40
				  }
				: undefined
		}
		bodyStyle={{
			padding: '0 40px'
		}}
		closeIcon={null}
		closable={false}
		title={
			title && (
				<HeadingWrapper>
					<TitleWrapper>
						<Title>{title}</Title>
					</TitleWrapper>
					{/* {!isClose && (
						<Icon
							Comp={Close}
							size={20}
							onClick={onClose}
							style={{ cursor: 'pointer' }}
						/>
					)} */}
				</HeadingWrapper>
			)
		}
		onClose={onClose}
		{...rest}
	/>
)

const Title = styled.span`
	font-weight: ${FontWeight.Medium};
	font-size: ${FontSize.XXLarge};
	line-height: 16px;

	color: #232630;
`

const TitleWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const HeadingWrapper = styled.div`
	display: flex;
	align-items: center;
`
