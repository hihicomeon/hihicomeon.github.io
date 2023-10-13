import { RuleObject } from 'antd/lib/form'
import { ReactNode } from 'react'

export interface Menu {
	title: string
	path: string
	page?: ReactNode
	children?: Menu[]
	icon?: ReactNode
	code?: string
	hidden?: boolean
	permission?: string[]
}

export type Validator = NonNullable<RuleObject['validator']>

export interface DamageItem {
	damageType: string
	damageDice: number
	damageCount: number
	damageAdd: number
}

export interface WeaponItem {
	id: string
	name: string
	type: string
	reLoading?: string
	rateMode?: string
	rateValue?: number
	mark?: string
	damage: DamageItem[]
}

export interface EnemyItem {
	confront: boolean
	armor: number
	resistance: number
	reduction: number
	dodge: number
}
