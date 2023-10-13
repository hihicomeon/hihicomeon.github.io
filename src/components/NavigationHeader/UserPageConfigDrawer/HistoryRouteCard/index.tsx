import styled from 'styled-components'
// import { useUserPageConfigContext } from '../../../../providers/userPageConfig'
import { Color } from '../../../../styles/color'
import { FontSize, FontWeight } from '../../../../styles/font'

export const HistoryRouteCard = () => {
	// const { historyRouteOpen, updateHistoryRoute } = useUserPageConfigContext()

	return (
		<Wrapper>
			<DescWrapper>
				<Title>布局设置</Title>
				<SubTitle>系统多标签栏Tab页</SubTitle>
			</DescWrapper>
			<SwitchWrapper>
				{/* <Switch
					checked={historyRouteOpen}
					checkedChildren='开启'
					unCheckedChildren='关闭'
					onChange={updateHistoryRoute}
					data-testid='history-route-switch'
				/> */}
			</SwitchWrapper>
		</Wrapper>
	)
}

const Title = styled.div`
	font-weight: ${FontWeight.Medium};
	font-size: ${FontSize.Medium};
	color: ${Color.TextMain};
`

const SubTitle = styled.div`
	font-weight: ${FontWeight.Regular};
	font-size: ${FontSize.Small};
	color: ${Color.TextSecondary};
`

const Wrapper = styled.div`
	display: flex;
	height: 38px;
	align-items: center;
`

const DescWrapper = styled.div`
	flex: 1;
`

const SwitchWrapper = styled.div`
	width: 56px;
`
