import store from 'store'
import { CustomEventName } from '@/consts/event'
import { StorageKey } from '@/consts/storage'
import { dispatchEvent } from './event'

export type ValidValue = string | number | null | undefined | object

export const Storage = {
	set<T = ValidValue>(key: StorageKey | string, value: T) {
		store.set(key, value)
		dispatchEvent(CustomEventName.Storage, {
			key,
			newValue: value
		})
	},

	get<T = ValidValue>(key: StorageKey | string, defaultValue?: T): T {
		return store.get(key, defaultValue)
	},

	remove(key: StorageKey | string) {
		store.remove(key)
		dispatchEvent(CustomEventName.Storage, {
			key,
			newValue: undefined
		})
	}
}
