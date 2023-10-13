// import React, { ReactNode, useCallback, useContext } from 'react'
// import { Dict, SystemDict, SystemDictName } from '../apis/system'
// import {
// 	DefaultSystemDict,
// 	useAvailableSystemDict
// } from '../hooks/useAvailableSystemDict'

// type SystemDictProviderProps = {
// 	children: ReactNode
// }

// type SystemDictContextType = {
// 	data: SystemDict
// 	get: (name: SystemDictName, code: string) => undefined | string
// 	getDict: (name: SystemDictName) => undefined | Dict[]
// }

// const InitialSystemDictContext: SystemDictContextType = {
// 	data: DefaultSystemDict,
// 	get: () => undefined,
// 	getDict: () => undefined
// }

// const SystemDictContext = React.createContext<SystemDictContextType>(
// 	InitialSystemDictContext
// )

// export const SystemDictProvider = ({ children }: SystemDictProviderProps) => {
// 	const { data } = useAvailableSystemDict()

// 	const get = useCallback(
// 		(name: SystemDictName, code: string) =>
// 			data[name].find((item: Dict) => item.code === code)?.label,
// 		[data]
// 	)

// 	const getDict = useCallback((name: SystemDictName) => data[name], [data])

// 	return (
// 		<SystemDictContext.Provider
// 			value={{
// 				data,
// 				get,
// 				getDict
// 			}}
// 		>
// 			{children}
// 		</SystemDictContext.Provider>
// 	)
// }

// export const useSystemContext = () => useContext(SystemDictContext)
