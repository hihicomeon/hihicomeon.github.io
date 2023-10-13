import { useEffect, useState } from 'react'
import { CustomEventName } from '@/consts/event'
import { StorageKey } from '@/consts/storage'
import { Storage, ValidValue } from '@/utils/storage'

export const useLatestStorageValue = <T = ValidValue>(
	key: StorageKey | string
) => {
	const initialValue = Storage.get<T | undefined>(key)
	const [value, setValue] = useState<T | undefined>(initialValue)

	useEffect(() => {
		const listener = (({ key: eventKey }: StorageEvent) => {
			if (eventKey === key) {
				setValue(Storage.get<T>(eventKey))
			}
		}) as EventListener

		window.addEventListener('storage', listener)
		return () => {
			window.removeEventListener('storage', listener)
		}
	}, [key])

	useEffect(() => {
		const listener = (({
			detail: { key: eventKey, newValue }
		}: CustomEvent) => {
			if (eventKey === key) {
				setValue(newValue)
			}
		}) as EventListener

		window.addEventListener(CustomEventName.Storage, listener)
		return () => {
			window.removeEventListener(CustomEventName.Storage, listener)
		}
	}, [key])

	return [value] as const
}
