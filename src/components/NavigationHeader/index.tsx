import {
	// Badge,
	Layout,
	// Tooltip,
	Image,
	Dropdown,
	MenuProps,
	Avatar
} from 'antd'
import { useCallback, useMemo, useState } from 'react'
import brand from '@/assets/brand.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { useLogout } from '@/hooks/useLogout'
import { Color } from '@/styles/color'
import { FontSize, FontWeight } from '@/styles/font'
import { CollapseToggleButton } from './CollapseToggleButton'
import { MessagePagePath } from '@/consts/menu'
// import { MenuCheckoutCard } from './MenuCheckoutCard'
import {
	DownOutlined,
	HomeOutlined,
	EditOutlined,
	LogoutOutlined
	// BellOutlined,
	// SettingOutlined
} from '@ant-design/icons'
import { UserPageConfigDrawer } from './UserPageConfigDrawer'
import { useUserPageConfigContext } from '../../providers/userPageConfig'
import { DropdownItem } from './DropdownItem'
import { store } from '@/utils/store'
import { useSelector } from 'react-redux'

const { Header } = Layout

type NavigationHeaderProps = {
	menuCollapsed: boolean
	onClickOpenMessageDrawer: () => void
	onMenuCollapsedChange: (v: boolean) => void
}

type RootState = ReturnType<typeof store.getState>

export const NavigationHeader = ({
	onMenuCollapsedChange,
	// onClickOpenMessageDrawer,
	menuCollapsed
}: NavigationHeaderProps) => {
	const navigate = useNavigate()

	const { historyRouteOpen } = useUserPageConfigContext()

	const userInfo = useSelector((state: RootState) => {
		return state.user.userInfo
	})

	const [configDrawerOpen, setConfigDrawerOpen] = useState(false)

	const { pathname } = useLocation()

	const handleClickUser = useCallback(() => {
		navigate('/profile')
	}, [navigate])

	const handleClickToSubscription = useCallback(() => {
		navigate('/indents-pay-order')
	}, [navigate])

	const { logout } = useLogout()

	const dropdownItems: MenuProps['items'] = useMemo(
		() => [
			// {
			// 	key: 'setting',
			// 	label: (
			// 		<DropdownItem
			// 			onClick={handleClickUser}
			// 			icon={<EditOutlined style={{ fontSize: '16px' }} />}
			// 			text='帐号设置'
			// 		/>
			// 	)
			// },
			{
				key: 'logout',
				label: (
					<DropdownItem
						onClick={logout}
						icon={<LogoutOutlined style={{ fontSize: '16px' }} />}
						text='退出'
					/>
				)
			}
		],
		[handleClickToSubscription, handleClickUser, logout]
	)

	return (
		<>
			<StyledHeader>
				<NavigationHeaderGlobal />
				<LeftActionsWrapper>
					{pathname === MessagePagePath ? (
						<Brand height={64} src={brand} preview={false} />
					) : (
						<CollapseToggleButton
							collapsed={menuCollapsed}
							onChange={onMenuCollapsedChange}
						/>
					)}
				</LeftActionsWrapper>
				<RightActionsWrapper>
					{/* <div
						style={{
							marginRight: 44,
							lineHeight: '14px',
							display: 'flex'
						}}>
						<Tooltip
							title='消息中心'
							trigger={['hover', 'click']}
							placement='bottom'>
							<Badge
								dot
								className='message-remind-badge navigation-header-icon'
								color={Color.TextRed}>
								<BellOutlined
									style={{ fontSize: '24px' }}
									onClick={onClickOpenMessageDrawer}
								/>
							</Badge>
						</Tooltip>

						<Tooltip
							title='页面设置'
							trigger={['hover', 'click']}
							placement='bottom'>
							<SettingTwoWrapper className='navigation-header-icon'>
								<SettingOutlined
									style={{ fontSize: '24px' }}
									onClick={() => setConfigDrawerOpen(true)}
								/>
							</SettingTwoWrapper>
						</Tooltip>
					</div> */}
					<Dropdown
						overlayClassName='header-user-info-dropdown'
						placement='bottom'
						menu={{
							items: dropdownItems,
							style: { padding: '16px 8px', borderRadius: 4 }
						}}
					>
						<UserInfoWrapper>
							<Avatar alt={userInfo.name} size={40} src={userInfo.avatar.url} />
							<NickName>
								<UserName>{userInfo.name}</UserName>
								<TenantName>{userInfo.tenant.name}</TenantName>
							</NickName>
							<DownOutlined />
						</UserInfoWrapper>
					</Dropdown>
				</RightActionsWrapper>
			</StyledHeader>
			{historyRouteOpen && (
				<HistoryMenusWrapper>
					<HomeOutlined
						style={{
							marginRight: 16
						}}
					/>
					{/* <MenuCheckoutCard /> */}
				</HistoryMenusWrapper>
			)}
			<UserPageConfigDrawer
				open={configDrawerOpen}
				onCancel={() => setConfigDrawerOpen(false)}
			/>
		</>
	)
}

const HistoryMenusWrapper = styled.div`
	background: ${Color.BackgroundWhite};
	padding: 6px 16px;
	padding-top: 0;
	position: relative;
	margin-left: -1px;
	display: flex;
	align-items: center;
	overflow-x: hidden;
	overflow-y: auto;
`

const StyledHeader = styled(Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 12px 24px;

	background: ${Color.BackgroundWhite};
	z-index: 1;
`

const LeftActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
`

const RightActionsWrapper = styled.div`
	display: flex;
	align-items: center;

	cursor: pointer;
`

const NickName = styled.div`
	margin: 0 8px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`
const UserName = styled.span`
	font-weight: ${FontWeight.Regular};
	font-size: ${FontSize.Large};
	line-height: 16px;
	color: ${Color.TextDarkGray};
`

const TenantName = styled.span`
	max-width: 140px;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: #747c92;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`

const UserInfoWrapper = styled.div`
	display: flex;
	align-items: center;
`

const Brand = styled(Image)``

// const SettingTwoWrapper = styled.div`
// 	margin-left: 16px;
// `

const NavigationHeaderGlobal = createGlobalStyle`
  .message-remind-badge .ant-badge-dot.ant-scroll-number {
    transition: 0s;
    width: 6px;
    height: 6px;
    top: 9px;
    right: 5px;
    box-shadow: none;
  }

  .navigation-header-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    font-size: ${FontSize.XXLarge};

    &:hover {
      background-color: ${Color.InputDisableBgColor};
      color: ${Color.TextLink};
    }
 }

 .header-user-info-dropdown .ant-dropdown-menu-item {
    padding: 0;
    border-radius: 4px;
  }
`
