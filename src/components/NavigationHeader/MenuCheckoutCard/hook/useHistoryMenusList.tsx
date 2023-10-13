import { Menu } from '@/types/index'
import { Location, matchRoutes } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { useLocalHistoryMenusList } from './useLocalHistoryMenusList'
import { removeNillOrEmpty } from '@/utils/removeNillOrEmpty'

type HistoryMenusListProps = {
	routeData?: Menu
	location: Location
}

type HistoryMenusListValuesReturn = {
	historyMenus: HistoryMenus[]
}

type HistoryMenusListHandleReturn = {
	handleAddOrUpdateMenus: ({
		routeData,
		location
	}: HistoryMenusListProps) => void
	handleRemoveMenus: (pathname: string) => void
}

const basics = 11

const DynamicLength = [
	[2600, basics + 3],
	[2300, basics + 2],
	[2100, basics + 1],
	[1800, basics],
	[1650, basics - 1],
	[1500, basics - 2],
	[1400, basics - 3],
	[1200, basics - 4],
	[800, basics - 7]
]

export type HistoryMenus = {
	pathname: string
	title: string
	path: string
	search?: string
}

type MatchRoutes = {
	route: {
		title: string
		path: string
		code: string
	}
}

export const useHistoryMenusList = (
	menus: Menu[]
): [HistoryMenusListValuesReturn, HistoryMenusListHandleReturn] => {
	const [localHistoryMenus, editLocalHistoryList] = useLocalHistoryMenusList()

	const [historyMenus, setMenus] = useState<HistoryMenus[]>(
		localHistoryMenus ?? []
	)

	const setHistoryMenus = useCallback(
		(data: HistoryMenus[]) => {
			setMenus(data)
			editLocalHistoryList(data)
		},
		[editLocalHistoryList]
	)

	const getMaxLengthList = useCallback(() => {
		const clientWidth = document.body.clientWidth

		const maxMenusLength =
			(DynamicLength.find((item) => clientWidth > item[0])?.[1] ?? 2) - 1

		return historyMenus.length > maxMenusLength
			? historyMenus.slice(historyMenus.length - maxMenusLength)
			: historyMenus
	}, [historyMenus])

	const handleUpdateMenus = useCallback(
		(location: Location): boolean => {
			const { pathname, search } = location

			const newRoutes = (matchRoutes(menus, pathname) as MatchRoutes[]) ?? []

			const newRoute = newRoutes[0]

			if (!newRoute) {
				return false
			}

			const historyRouter = historyMenus.find(
				(item) => item.path === newRoute.route.path
			)

			if (
				historyRouter &&
				pathname + search !== historyRouter.pathname + historyRouter.search
			) {
				const updateHistoryMenus = historyMenus.map((item) => {
					if (item.path === newRoute.route.path) {
						return {
							...item,
							pathname,
							search
						}
					}
					return item
				})

				setHistoryMenus(updateHistoryMenus)
				return true
			}
			return false
		},
		[historyMenus, menus, setHistoryMenus]
	)

	const handleAddMenus = useCallback(
		({ routeData, location }: HistoryMenusListProps) => {
			const { pathname, search } = location
			const { path, title } = routeData as Menu

			const hasUpdate =
				historyMenus.filter((item) => item.pathname === pathname).length > 0

			if (!hasUpdate) {
				const oldMenus = getMaxLengthList()

				setHistoryMenus([
					...oldMenus,
					removeNillOrEmpty({
						pathname,
						path,
						title,
						search
					})
				])
			}
		},
		[historyMenus, getMaxLengthList, setHistoryMenus]
	)

	const handleAddOrUpdateMenus = useCallback(
		(data: HistoryMenusListProps) => {
			const { routeData, location } = data
			if (!routeData) {
				return
			}
			const hasUpdateMenus = handleUpdateMenus(location)
			if (!hasUpdateMenus) {
				handleAddMenus(data)
			}
		},
		[handleAddMenus, handleUpdateMenus]
	)

	const handleRemoveMenus = useCallback(
		(pathName: string) => {
			const filterMenus = historyMenus.filter(
				(item) => item.pathname !== pathName
			)

			setHistoryMenus(filterMenus)
		},
		[historyMenus, setHistoryMenus]
	)

	return [{ historyMenus }, { handleAddOrUpdateMenus, handleRemoveMenus }]
}
