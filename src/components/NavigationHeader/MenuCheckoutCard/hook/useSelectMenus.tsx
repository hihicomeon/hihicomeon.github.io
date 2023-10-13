import { useMemo, useRef } from 'react'
import { Menu } from '@/types/index'
import { extractMenusTree } from '../utils/utils'
import { pathToRegexp } from 'path-to-regexp'
import { useLocation, Location } from 'react-router-dom'

type SelectMenusValuesReturn = {
	routeData?: Menu
	location: Location
	menus: Menu[]
}

export const useSelectMenus = (): [SelectMenusValuesReturn] => {
	const location = useLocation()

	const { pathname } = location

	const { current } = useRef(extractMenusTree())

	const routeData = useMemo(() => {
		return current.find((item) => pathToRegexp(item.path).exec(pathname))
	}, [pathname, current])

	return [{ routeData, location, menus: current }]
}
