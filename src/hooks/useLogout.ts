import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
	const navigate = useNavigate()

	const logout = useCallback(() => {
		localStorage.removeItem('token')
		navigate('/login', {
			replace: true
		})
	}, [])

	return { logout }
}
