import { Menu, MenuProps } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Menus } from '@/consts/menu'
// import { useAuthContext } from './Auth'
import { Color } from '../styles/color'
import { getKeyPathOf, getNavigationItems } from '@/utils/menu'
import { equals } from 'ramda'

type SelectHandler = NonNullable<MenuProps['onSelect']>

const MENU_ID_NAME = 'menu-custom-style'

type NavigationMenuProps = {
	menuCollapsed: boolean
}

export const NavigationMenu = ({ menuCollapsed }: NavigationMenuProps) => {
	// const { user } = useAuthContext()
	// const { permissions } = user

	const items = useMemo(
		() => {
			return getNavigationItems({
				menus: Menus,
				permissions: []
			}).filter((item) => item)
		},
		[
			// permissions,
		]
	)
	const navigate = useNavigate()
	const pathname = useLocation().pathname
	const [selected, setSelected] = useState([pathname])
	const [opened, setOpened] = useState(getKeyPathOf(pathname, items))

	useEffect(() => {
		if (!equals([pathname], selected)) {
			setSelected([pathname])
			setOpened(getKeyPathOf(pathname, items))
		}
	}, [items, pathname, selected])

	const handleSelect = useCallback<SelectHandler>(
		({ key }) => {
			navigate(key)
			setSelected([key])
			setOpened(getKeyPathOf(key, items))
		},
		[items, navigate]
	)

	return (
		<>
			<MenuGlobalMenuStyle />
			<Menu
				mode='inline'
				id={!menuCollapsed ? MENU_ID_NAME : ''}
				items={items}
				selectedKeys={selected}
				openKeys={opened}
				onSelect={handleSelect}
				onOpenChange={setOpened}
				className='navigate-menu'
			/>
		</>
	)
}

const MenuGlobalMenuStyle = createGlobalStyle`
  .ant-menu {
    color: ${Color.TextDarkGray};
    user-select: none;

    &.navigate-menu {
      height: calc(100vh - 64px);
      overflow-y: auto;
      overflow-x: hidden;

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
        background-color: ${Color.BackgroundGray};
      }
    }
  }

  #${MENU_ID_NAME} .ant-menu-inline .ant-menu-submenu-title {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  #${MENU_ID_NAME} .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  #${MENU_ID_NAME} .ant-menu-submenu-title {
    margin: 6px 16px;
    width: 204px;
    height: 32px;
    border-radius: 8px;
    padding-right: 24px;

    &:hover {
      background-color: ${Color.BorderGrayColor};
      color: ${Color.TextMain};
    }
  }

  #${MENU_ID_NAME} .ant-menu-item {
    margin: 6px 16px;
    width: 204px;
    border-radius: 8px;
    height: 32px;

    &:hover {
      background-color: ${Color.BorderGrayColor};
      color: ${Color.TextMain};
    }

    &:active {
      background: ${Color.MainColor};
    }
  }

  #${MENU_ID_NAME} > &.ant-menu-submenu-selected > .ant-menu-submenu-title {
    border-radius: 8px;

    .ant-menu-submenu-arrow {
      color: ${Color.BackgroundWhite};
    }
  }

  #${MENU_ID_NAME} .ant-menu-sub .ant-menu-submenu-selected > .ant-menu-submenu-title {
    background: ${Color.Transparent};
    border-radius: 8px;
    color: ${Color.Primary};

    .ant-menu-submenu-arrow {
      color: ${Color.Primary};
    }
  }

  #${MENU_ID_NAME}.ant-menu-inline .ant-menu-item::after {
    border-right: 0 solid ${Color.Transparent};
  }

  #${MENU_ID_NAME}.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${Color.Transparent};
    color: ${Color.MainColor};
  }

  #${MENU_ID_NAME}.ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-selected {
    border-radius: 8px;
  }

  #${MENU_ID_NAME} .ant-menu-sub.ant-menu-inline {
    background: ${Color.BackgroundWhite};
  }
`
