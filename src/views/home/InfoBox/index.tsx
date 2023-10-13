import { DamageType, WeaponType } from '@/consts/dictsMap'
import { Color } from '@/styles/color'
import { FontSize, FontWeight } from '@/styles/font'
import { useMemo } from 'react'
import styled from 'styled-components'
import { FormValues } from '../SettingDrawer'
import { Tooltip } from 'antd'

type InfoBoxProps = {
	type: string
	data?: FormValues
}

export const InfoBox = ({ type, data }: InfoBoxProps) => {
	const DamageTypeMap = useMemo(() => {
		const obj: { [key: string]: string } = {}
		DamageType.forEach((item) => {
			obj[item.value as string] = item.label
		})
		return obj
	}, [DamageType])
	const weaponType = (type: string) => {
		let res = '-'
		WeaponType.find((v) => {
			if (v.value === type) {
				res = v.label
			}
		})
		return res
	}

	const getDamageDice = (data: any[]) => {
		if (!data) return
		const res: string[] = []
		data.forEach((item, index) => {
			if (index !== data.length) {
				res.push(
					`${DamageTypeMap[item.damageType]} ${item.damageCount}D${
						item.damageDice
					}${item.damageAdd ? '+' + item.damageAdd : ''}`
				)
			}
		})
		return res.join(' + ')
	}

	const NotNull = (value?: string | number) => {
		if (value) {
			return (
				<Tooltip title={value}>
					<Value>{value}</Value>
				</Tooltip>
			)
		}
		return <Value>-</Value>
	}

	return (
		<>
			{type === 'own' && (
				<Wrapper>
					<TitleBox>本体</TitleBox>
					<DetailBox>
						<Label>装备名称：</Label>
						{NotNull(data?.name as string)}
					</DetailBox>
					<DetailBox>
						<Label>装备类型：</Label>
						{NotNull(weaponType(data?.type as string))}
					</DetailBox>
					{data?.type === 'long' && (
						<>
							<DetailBox>
								<Label>是否装填：</Label>
								{data.reLoading === 'yes' ? '是' : '否'}
							</DetailBox>
							{data.reLoading === 'yes' && (
								<DetailBox>
									<Label>装填成功率：</Label>
									{`D${data.rateMode} >= ${data.rateValue}`}
								</DetailBox>
							)}
						</>
					)}
					<DetailBox>
						<Label>装备伤害：</Label>
						{NotNull(getDamageDice(data?.damage as any[]))}
					</DetailBox>
					<DetailBox>
						<Label>装备描述：</Label>
						{NotNull(data?.mark as string)}
					</DetailBox>
				</Wrapper>
			)}
			{type !== 'own' && (
				<Wrapper>
					<TitleBox>木桩</TitleBox>
					<DetailBox>
						<Label>护甲：</Label>
						{NotNull(data?.armor as string)}
					</DetailBox>
					<DetailBox>
						<Label>魔抗：</Label>
						{NotNull(data?.resistance as string)}
					</DetailBox>
					<DetailBox>
						<Label>闪避：</Label>
						{NotNull(data?.dodge as string)}
					</DetailBox>
					<DetailBox>
						<Label>减伤：</Label>
						{NotNull(data?.reduction as string)}
					</DetailBox>
				</Wrapper>
			)}
		</>
	)
}

const Wrapper = styled.div`
	padding: 20px;
	background: ${Color.TableStreakBg};
	border-radius: 8px;
	margin-bottom: 20px;
`
const TitleBox = styled.div`
	font-size: ${FontSize.Large};
	font-weight: ${FontWeight.Bold};
	color: ${Color.TextImportant};
	margin-bottom: 5px;
`

const DetailBox = styled.div`
	color: ${Color.TextImportant};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-width: 150px;
	margin-bottom: 10px;
`

const Label = styled.div`
	font-size: ${FontSize.Medium};
	color: ${Color.TextSecondary};
	word-break: keep-all;
	margin-right: 5px;
`

const Value = styled.div`
	color: ${Color.TextImportant};
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`
