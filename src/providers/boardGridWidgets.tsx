// import React, { ReactNode, useCallback, useContext, useState } from 'react'
// import { GridWidget } from '../features/home/pages/components/BoardGridLayout/GridLayout'

// type BoardGridWidgets = {
// 	boardGridWidgets: GridWidget[]
// 	setBoardGridWidgets: (widgets: GridWidget[]) => void
// 	addBoardGridWidget: (widget: GridWidget) => void
// 	isOperate: boolean
// 	setIsOperate: (v: boolean) => void
// }

// const DefaultValue: BoardGridWidgets = {
// 	boardGridWidgets: [],
// 	setBoardGridWidgets: () => null,
// 	addBoardGridWidget: () => null,
// 	isOperate: false,
// 	setIsOperate: () => null
// }

// const BoardGridWidgetsContext = React.createContext(DefaultValue)

// type BoardGridWidgetsProviderProps = {
// 	children: ReactNode
// }

// export const BoardGridWidgetsProvider = ({
// 	children
// }: BoardGridWidgetsProviderProps) => {
// 	const [boardGridWidgets, setBoardGridWidgets] = useState<GridWidget[]>([])

// 	const [isOperate, setIsOperate] = useState(false)

// 	const addBoardGridWidget = useCallback(
// 		(widget: GridWidget) => {
// 			setBoardGridWidgets([...boardGridWidgets, widget])
// 		},
// 		[boardGridWidgets]
// 	)

// 	return (
// 		<BoardGridWidgetsContext.Provider
// 			value={{
// 				boardGridWidgets,
// 				isOperate,
// 				setBoardGridWidgets,
// 				addBoardGridWidget,
// 				setIsOperate
// 			}}
// 		>
// 			{children}
// 		</BoardGridWidgetsContext.Provider>
// 	)
// }

// export const useBoardGridWidgetsContext = () =>
// 	useContext(BoardGridWidgetsContext)
