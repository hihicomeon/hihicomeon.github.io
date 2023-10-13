import { Image, Layout } from 'antd'
import { useState, useCallback, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import brand from './assets/logo.jpg'
import logo from './assets/logo.jpg'
import { NavigationHeader } from './components/NavigationHeader'
import { NavigationMenu } from './components/NavigationMenu'
import { Color } from './styles/color'
import { MessagePagePath } from '@/consts/menu'

const { Sider, Content } = Layout

export const App = () => {
	const [collapsed, setCollapsed] = useState(true)

	const [messageOpen, setMessageOpen] = useState(false)

	const { pathname } = useLocation()

	const handleOpenMessageDrawer = useCallback(() => {
		setMessageOpen(!messageOpen)
	}, [messageOpen])

	return (
		<Wrapper>
			{pathname !== MessagePagePath && (
				<StyledSider
					width={236}
					trigger={null}
					collapsible
					collapsed={collapsed}
				>
					<BrandWrapper>
						{collapsed ? (
							<Logo
								width={32}
								height={32}
								src={logo}
								preview={false}
								fallback={logo}
							/>
						) : (
							<Brand
								width={234}
								height={64}
								src={brand}
								preview={false}
								fallback={brand}
							/>
						)}
					</BrandWrapper>
					<NavigationMenu menuCollapsed={collapsed} />
				</StyledSider>
			)}
			<Layout>
				<NavigationHeader
					menuCollapsed={collapsed}
					onMenuCollapsedChange={setCollapsed}
					onClickOpenMessageDrawer={handleOpenMessageDrawer}
				/>
				<LayoutWrapper>
					<ContentWrapper id='content-wrapper'>
						<Outlet />
					</ContentWrapper>
				</LayoutWrapper>
			</Layout>
		</Wrapper>
	)
}

const LayoutWrapper = styled.div`
	width: 100;
	height: 100%;
	position: relative;
	overflow-y: hidden;
	display: flex;
	flex: 1;
`

const Wrapper = styled(Layout)`
	width: 100vw;
	height: 100vh;
`

const ContentWrapper = styled(Content)`
	position: relative;
	flex: 1;
	display: flex;
	flex-flow: column nowrap;
	position: relative;
	padding: 24px;

	background: ${Color.BgColor};

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: ${Color.BackgroundWhite};
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #ccc;
	}
`

const StyledSider = styled(Sider)`
	background: ${Color.BackgroundWhite};
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

	display: flex;
	flex-flow: column nowrap;

	position: relative;
`

const SiderLogoImg = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	height: 180px;
	width: 100%;
	user-select: none;
	pointer-events: none;
	background-color: ${Color.BackgroundWhite};
`

const BrandWrapper = styled.div`
	height: 64px;

	display: flex;
	align-items: center;
	justify-content: center;

	user-select: none;
	pointer-events: none;
	background-color: ${Color.BackgroundWhite};
`

const Brand = styled(Image)``

const Logo = styled(Image)`
	height: 32px;
	width: 32px;
`
