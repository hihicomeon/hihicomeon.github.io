import { useCallback } from 'react'
import { StorageKey } from '../consts/storage'
import { useAuthContext } from '../providers/auth'
import { useLatestStorageValue } from './useLatestStorageValue'
import { Storage } from '@/utils/storage'

export type CustomerFilters<T> = {
	[index: string]: T
}

export const useAssignStorageConfig = <T>(key: StorageKey) => {
	const { user } = useAuthContext()

	const [filtersOfAllUsers] = useLatestStorageValue<CustomerFilters<T>>(key)

	const remove = useCallback(() => {
		Storage.remove(key)
	}, [key])

	const update = useCallback(
		(values?: T) => {
			if (values === undefined) {
				remove()
				return
			}
			Storage.set(key, { ...filtersOfAllUsers, [user.id]: values })
		},
		[filtersOfAllUsers, key, user.id, remove]
	)

	const value = filtersOfAllUsers?.[user.id]

	return [value, update] as const
}
