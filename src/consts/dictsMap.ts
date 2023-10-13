import { DicItem } from '@/types/system'

export const Dice: DicItem[] = [
	{ value: 100, label: 'D100' },
	{ value: 20, label: 'D20' },
	{ value: 12, label: 'D12' },
	{ value: 10, label: 'D10' },
	{ value: 8, label: 'D8' },
	{ value: 6, label: 'D6' },
	{ value: 4, label: 'D4' }
]
export const WeaponType: DicItem[] = [
	{ value: 'close', label: '近战' },
	{ value: 'long', label: '远程' }
]

export const CloseWeaponProperty: DicItem[] = [
	{ value: 'sword', label: '刀剑' },
	{ value: 'blunt', label: '钝器' },
	{ value: 'handle', label: '长柄' },
	{ value: 'heavy', label: '重武器' },
	{ value: 'species', label: '异种武器' },
	{ value: 'axe', label: '斧' },
	{ value: 'gloves', label: '拳套' }
]

export const LongWeaponProperty: DicItem[] = [
	{ value: 'ammoY', label: '弹药（需要填装）' },
	{ value: 'ammoN', label: '弹药（不需要填装）' },
	{ value: 'magic', label: '法术' },
	{ value: 'special', label: '特殊' }
]

export const DamageType: DicItem[] = [
	{ value: 'puncture', label: '穿刺' },
	{ value: 'slash', label: '挥砍' },
	{ value: 'blunt', label: '钝击' },
	{ value: 'element', label: '元素' },
	{ value: 'special', label: '特殊伤害' }
]
