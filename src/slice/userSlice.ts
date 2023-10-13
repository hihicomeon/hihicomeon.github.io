import { UserInfo } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
	userInfo: UserInfo
}

const initState: UserState = {
	userInfo: {
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
}

const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		saveUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
			return {
				...state,
				userInfo: action.payload
			}
		}
	}
})

export const { saveUserInfo } = userSlice.actions
export default userSlice.reducer
