import React, { useContext, useState, ReactNode, useCallback } from 'react'
import { StorageKey } from '@/consts/storage'
import { useAssignStorageConfig } from '@/hooks/useAssignStorageConfig'

type UserPageConfigProviderProps = {
	children: ReactNode
}

type UserPageConfig = {
	historyRouteOpen: boolean
	updateHistoryRoute: (bool: boolean) => void
}

const InitialUserPageConfig: UserPageConfig = {
	historyRouteOpen: false,
	updateHistoryRoute: () => null
}

const UserPageConfigContext = React.createContext(InitialUserPageConfig)

export const UserPageConfigProvider = ({
	children
}: UserPageConfigProviderProps) => {
	const [initHistoryRouteOpen, updateLocalHistoryRoute] =
		useAssignStorageConfig<boolean>(StorageKey.HistoryRouteOpen)

	const [historyRouteOpen, setHistoryRouteOpen] = useState(
		initHistoryRouteOpen !== undefined ? initHistoryRouteOpen : true
	)

	const updateHistoryRoute = useCallback(
		(bool: boolean) => {
			updateLocalHistoryRoute(bool)
			setHistoryRouteOpen(bool)
		},
		[updateLocalHistoryRoute]
	)

	return (
		<UserPageConfigContext.Provider
			value={{
				historyRouteOpen,
				updateHistoryRoute
			}}
		>
			{children}
		</UserPageConfigContext.Provider>
	)
}

export const useUserPageConfigContext = () => useContext(UserPageConfigContext)
