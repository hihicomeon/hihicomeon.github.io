import { CustomEventName } from '@/consts/event'

type ValidValue = string | number | object | null | undefined

export const dispatchEvent = <T = ValidValue>(
	name: CustomEventName,
	value?: T
) => {
	const customEvent = new CustomEvent(name, { detail: value })
	window.dispatchEvent(customEvent)
}
