import { reject } from 'ramda'
import { isNilOrEmpty } from './utils'

export function removeNillOrEmpty<T extends object>(data: T) {
	return reject(isNilOrEmpty, data)
}
