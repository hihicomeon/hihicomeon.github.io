// import { ReactNode, createContext, useCallback, useContext } from 'react'
// import { ActuatorResponse, useActuator } from '../apis/actuator'
// import { ActuatorEnum } from '../consts/actuator'

// type ActuatorToggleProviderProps = {
// 	children: ReactNode
// }

// const DefaultData: ActuatorResponse[] = []

// const InitReturnData = { enabled: false, name: ActuatorEnum.Carriers }

// type InitialSystemDictValueType = {
// 	data: ActuatorResponse[]
// 	get: (name: ActuatorEnum) => ActuatorResponse
// 	getBatch: (names?: ActuatorEnum[]) => { [key in ActuatorEnum]?: boolean }
// 	refetchFeatures: () => void
// }

// const InitialSystemDictValue: InitialSystemDictValueType = {
// 	data: DefaultData,
// 	get: () => InitReturnData,
// 	getBatch: () => ({}),
// 	refetchFeatures: () => null
// }

// const ActuatorContext = createContext(InitialSystemDictValue)

// export const ActuatorProvider = ({ children }: ActuatorToggleProviderProps) => {
// 	const [{ data }, refetch] = useActuator()

// 	const get = useCallback(
// 		(name: ActuatorEnum) => {
// 			if (!data) {
// 				return InitReturnData
// 			}
// 			const list = data.filter((item) => item.name === name)

// 			return list.length > 0 ? list[0] : InitReturnData
// 		},
// 		[data]
// 	)

// 	const getBatch = useCallback(
// 		(names?: ActuatorEnum[]) => {
// 			if (!data) {
// 				return {}
// 			}

// 			return data.reduce((acc, cur) => {
// 				return !names || names.includes(cur.name)
// 					? { ...acc, [cur.name]: cur.enabled }
// 					: acc
// 			}, {})
// 		},
// 		[data]
// 	)

// 	return (
// 		<ActuatorContext.Provider
// 			value={{
// 				data: data || DefaultData,
// 				get,
// 				getBatch,
// 				refetchFeatures: refetch
// 			}}
// 		>
// 			{children}
// 		</ActuatorContext.Provider>
// 	)
// }

// export const useActuatorContext = () => useContext(ActuatorContext)
