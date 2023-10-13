import { UserInfo } from '@/types/user'
import React, {
	ReactNode,
	// useCallback,
	useContext
	// useEffect,
	// useState
} from 'react'
import { useSelector } from 'react-redux'
import { store } from '@/utils/store'

const DEFAULT_EMPTY_TOKEN = ''

const DefaultUser: UserInfo = {
	id: '',
	name: '',
	admin: false,
	tenant: {
		id: '',
		name: '',
		contact: '',
		status: 'UNABLE',
		createdAt: '',
		phone: '',
		account: ''
	},
	avatar: {
		objectKey: '',
		url: '',
		thumbnail: ''
	}
}

type Auth = {
	token: string
	user: UserInfo
}

const InitialAuth: Auth = {
	token: DEFAULT_EMPTY_TOKEN,
	user: DefaultUser
}

const AuthContext = React.createContext(InitialAuth)

type AuthProviderProps = {
	children: ReactNode
	token: string
}

type RootState = ReturnType<typeof store.getState>

export const AuthProvider = ({ children, token }: AuthProviderProps) => {
	const user = useSelector((state: RootState) => {
		return state.user.userInfo
	})

	// if (!user.id) {
	// 	return null
	// }

	return (
		<AuthContext.Provider
			value={{
				user,
				token
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
