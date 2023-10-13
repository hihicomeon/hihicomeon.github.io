import { Validator } from '@/types'
import dayjs, { Dayjs } from 'dayjs'

export const validateTimeNoLess1M: Validator = (_, v: Dayjs[]) => {
	if (!v) {
		return Promise.resolve()
	}
	const [start, end] = v
	const result = dayjs(end).unix() - dayjs(start).unix()
	if (result < 60) {
		return Promise.reject('开始、结束时间不能小于1分钟')
	}
	return Promise.resolve()
}
