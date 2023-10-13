import { useCallback, useMemo } from 'react'
import { StorageKey } from '@/consts/storage'
import { HistoryMenus } from './useHistoryMenusList'

export const useLocalHistoryMenusList = (): [
	HistoryMenus[],
	(list: HistoryMenus[]) => void
] => {
	const historyList = useMemo(() => {
		const data = sessionStorage.getItem(StorageKey.HistoryMenus)

		return data ? JSON.parse(data) : []
	}, [])

	const update = useCallback((list: HistoryMenus[]) => {
		sessionStorage.setItem(StorageKey.HistoryMenus, JSON.stringify(list))
	}, [])

	return [historyList, update]
}
