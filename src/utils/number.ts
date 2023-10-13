import { bignumber } from 'mathjs'

export const toNumber = (v: string) => bignumber(v).toNumber()

export const generateRandomInteger = (digits: number): number => {
	const min = Math.pow(10, digits - 1)
	const max = Math.pow(10, digits) - 1
	const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
	return randomInteger
}
