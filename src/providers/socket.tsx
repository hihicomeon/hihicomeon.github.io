// import React, {
// 	ReactNode,
// 	useCallback,
// 	useContext,
// 	useEffect,
// 	useState
// } from 'react'
// import { SocketSendUrl, SocketSubscribeUrl } from '../consts/socket'
// import { Socket, StompClient, SubscribeBody } from '../utils/socket'
// import { useDebouncedCallback } from 'use-debounce'

// type MessageSocketProps = {
// 	children: ReactNode
// }

// type MessageSocketType = {
// 	socket?: StompClient
// 	subscribe: <T>(
// 		sendKey: SocketSubscribeUrl | string,
// 		callback: (data: T) => void
// 	) => void
// 	unsubscribe: (sendKey: SocketSubscribeUrl | string) => void
// 	send: <T, H = undefined>(
// 		sendKey: SocketSendUrl,
// 		dataJson: T,
// 		headers?: H
// 	) => void

// 	debouncedConnect: () => void
// }

// const InitialSocket: MessageSocketType = {
// 	socket: undefined,
// 	subscribe: () => undefined,
// 	unsubscribe: () => undefined,
// 	send: () => undefined,
// 	debouncedConnect: () => undefined
// }

// const MessageSocketContext = React.createContext(InitialSocket)

// export const MessageSocket = ({ children }: MessageSocketProps) => {
// 	const [socketClient, setSocketClient] = useState<StompClient>()

// 	const debouncedConnect = useDebouncedCallback(
// 		() => {
// 			Socket.connect((stompClient: StompClient) => {
// 				setSocketClient(stompClient)
// 				window.onbeforeunload = Socket.disconnect
// 			})
// 		},
// 		2000,
// 		{
// 			leading: false,
// 			trailing: true
// 		}
// 	)

// 	useEffect(() => {
// 		debouncedConnect()

// 		return () => {
// 			Socket.disconnect()
// 			setSocketClient(undefined)
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [])

// 	const subscribe = useCallback(
// 		function <T>(
// 			sendKey: SocketSubscribeUrl | string,
// 			callback: (data: T) => void
// 		) {
// 			socketClient?.subscribe(sendKey, (data: SubscribeBody<T>) => {
// 				callback(JSON.parse(data.body as string) as T)
// 			})
// 		},
// 		[socketClient]
// 	)

// 	const unsubscribe = useCallback(
// 		(sendKey: SocketSubscribeUrl | string) => {
// 			socketClient?.unsubscribe(sendKey)
// 		},
// 		[socketClient]
// 	)

// 	const send = useCallback(
// 		function <T, H = undefined>(sendKey: SocketSendUrl, data: T, headers?: H) {
// 			socketClient?.send(sendKey, headers ?? {}, JSON.stringify(data))
// 		},
// 		[socketClient]
// 	)

// 	return (
// 		<MessageSocketContext.Provider
// 			value={{
// 				socket: socketClient,
// 				subscribe,
// 				unsubscribe,
// 				send,
// 				debouncedConnect
// 			}}
// 		>
// 			{children}
// 		</MessageSocketContext.Provider>
// 	)
// }

// export const useMessageSocketContext = () => useContext(MessageSocketContext)
