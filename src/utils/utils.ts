import * as R from 'ramda'

export const isNilOrEmpty = R.either(R.isNil, R.isEmpty)

// 命中骰函数
export const rollToHit = (
	attackerBonus: number = 0,
	defenderBonus: number = 0,
	isDefend: boolean = false
) => {
	const dice = [20, 6, 4, 8, 10, 12, 100]
	let index = 0
	let attackerRoll = 0
	let defenderRoll = 0

	do {
		if (index === dice.length) index = 0
		let sides = dice[index]
		index++

		// 掷骰子，得到一个1到骰子面数之间的随机数
		attackerRoll = Math.floor(Math.random() * sides) + 1
		defenderRoll = rollToDefend(sides, isDefend)

		// 判断是否为大成功（骰值结果为20）或大失败（骰值结果为1）
		const isAttackerCritical = attackerRoll === 20
		const isAttackerFumble = attackerRoll === 1
		const isDefenderCritical = defenderRoll === 20
		const isDefenderFumble = defenderRoll === 1

		if (isAttackerCritical && isDefenderFumble) {
			// 攻击方暴击（4倍伤害）并且防守方大失败时
			return {
				isHit: true,
				isCritical: true,
				isFumble: false,
				isDefenderCritical,
				isDefenderFumble,
				attackerRoll,
				defenderRoll
			}
		}
		if (isAttackerCritical) {
			// 攻击方暴击（2倍伤害）
			return {
				isHit: true,
				isCritical: true,
				isFumble: false,
				isDefenderCritical,
				isDefenderFumble,
				attackerRoll,
				defenderRoll
			}
		}
		if (!isAttackerFumble && isDefenderFumble) {
			// 攻击方暴击（2倍伤害）
			return {
				isHit: true,
				isCritical: true,
				isFumble: false,
				isDefenderCritical,
				isDefenderFumble,
				attackerRoll,
				defenderRoll
			}
		}
		if (isAttackerFumble && !isDefenderFumble) {
			if (isDefend)
				// 大失败时直接未命中
				return {
					isHit: false,
					isCritical: false,
					isFumble: true,
					isDefenderCritical,
					isDefenderFumble,
					attackerRoll,
					defenderRoll
				}
		}

		// 根据规则，当骰值为1、2、3时不计算加值
		attackerRoll =
			attackerRoll <= 3 ? attackerRoll : attackerRoll + attackerBonus
		defenderRoll =
			defenderRoll <= 3 ? defenderRoll : defenderRoll + defenderBonus
	} while (attackerRoll === defenderRoll)

	// 最终判定是否命中
	const isHit = attackerRoll > defenderRoll
	return {
		isHit,
		isCritical: false,
		isFumble: false,
		isDefenderCritical: false,
		isDefenderFumble: false,
		attackerRoll,
		defenderRoll
	}
}

export const rollToDefend = (sides: number, isDefend: boolean) => {
	if (!isDefend) return 0
	return Math.floor(Math.random() * sides) + 1
}
