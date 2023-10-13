import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Color } from '../../../styles/color'
import { FontSize, FontWeight } from '../../../styles/font'
import { HistoryMenus, useHistoryMenusList } from './hook/useHistoryMenusList'
import { useSelectMenus } from './hook/useSelectMenus'
import { CloseOutlined } from '@ant-design/icons'

export const MenuCheckoutCard = () => {
	const navigate = useNavigate()

	const [{ routeData, location, menus }] = useSelectMenus()

	const { pathname } = location

	const [{ historyMenus }, { handleAddOrUpdateMenus, handleRemoveMenus }] =
		useHistoryMenusList(menus)

	useEffect(() => {
		handleAddOrUpdateMenus({ routeData, location })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	const handleRouterPush = useCallback(
		(item: HistoryMenus) => {
			navigate(item.search ? `${item.pathname}${item.search}` : item.pathname)
		},
		[navigate]
	)

	const handleRemoveRouter = useCallback(
		(pathName: string) => {
			if (pathname === pathName) {
				navigate('/')
			}

			handleRemoveMenus(pathName)
		},
		[handleRemoveMenus, navigate, pathname]
	)

	return (
		<Wrapper data-testid='route-del-icon'>
			{historyMenus.map((item) => (
				<RouteCard
					key={item.pathname}
					title={item.title}
					select={pathname === item.pathname}
				>
					<Title
						onClick={() => {
							pathname !== item.pathname && handleRouterPush(item)
						}}
					>
						{item.title}
					</Title>
					<CloseOutlined
						style={{
							marginLeft: 16,
							cursor: 'pointer'
						}}
						onClick={() => {
							handleRemoveRouter(item.pathname)
						}}
					/>
				</RouteCard>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
	overflow-y: hidden;
`

const Title = styled.div`
	min-width: 56px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 100%;
	line-height: 36px;
`

const RouteCard = styled.div<{ select: boolean }>`
	min-width: 112px;
	height: 36px;
	display: flex;
	align-items: center;

	background: ${(p) => (p.select ? Color.Primary : Color.MenuBackground)};
	border-radius: 8px;
	padding: 0 12px;

	font-size: ${FontSize.Medium};
	color: ${(p) => (p.select ? Color.TextWhite : Color.TextDarkGray)};
	cursor: ${(p) => (p.select ? 'no-drop' : 'pointer')};
	font-weight: ${FontWeight.Regular};
	user-select: none;
	transition: all 0.5s;
	margin-right: 8px;
`
