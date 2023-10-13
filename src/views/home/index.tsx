import { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, message } from 'antd'
import logo from '@/assets/logo.jpg'
import styled from 'styled-components'
import { Color } from '@/styles/color'
import { ECharts } from '@/components/ECharts'
import { validateBIGINT } from '@/validators/number'
import { FormValues, SettingDrawer } from './SettingDrawer'
import { InfoBox } from './InfoBox'
import { DamageItem, EnemyItem } from '@/types'
import localforage from 'localforage'
import dayjs from 'dayjs'
import { rollToHit } from '@/utils/utils'

export const HomePage = () => {
	const [form] = Form.useForm()
	const [messageApi, contextHolder] = message.useMessage()
	const [open, setOpen] = useState<boolean>(false)
	const [settingType, setType] = useState<string>('own')
	const [own, setOwn] = useState<FormValues>()
	const [enemy, setEnemy] = useState<FormValues>()
	const [xAxisList, setXAxisList] = useState<number[]>([])
	const [list, setList] = useState<number[]>([])
	const [bList, setBList] = useState<number[]>([])

	const option = useMemo(() => {
		return {
			title: {
				text: '伤害骰值分布'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow',
					label: {
						show: true
					}
				}
			},
			calculable: true,
			legend: {
				data: ['扣减后伤害触发次数', '骰值伤害触发次数']
			},
			grid: {
				top: '12%',
				left: '1%',
				right: '10%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: xAxisList
				}
			],
			yAxis: [
				{
					type: 'value',
					name: '触发次数'
				}
			],
			dataZoom: [
				{
					show: true,
					start: 0,
					end: 100
				}
			],
			series: [
				{
					name: '扣减后伤害触发次数',
					type: 'bar',
					data: bList
				},
				{
					name: '骰值伤害触发次数',
					type: 'bar',
					data: list
				}
			]
		}
	}, [bList, list, xAxisList])
	const handleSetObj = (data: FormValues, type: string) => {
		type === 'own' ? setOwn(data) : setEnemy(data)
	}

	const rollDice = (dice: number) => {
		return Math.floor(Math.random() * dice) + 1
	}
	const rollDamage = (data: DamageItem[], enemy?: EnemyItem, rate?: number) => {
		let resultA = 0
		let resultB = 0
		data.forEach((item) => {
			for (let i = 1; i <= item.damageCount; i++) {
				resultA += rollDice(item.damageDice)
			}
			if (item.damageAdd) {
				resultA += Number(item.damageAdd)
			}
			if (rate) resultA = resultA * rate
			resultB = resultA
			if (enemy) {
				const { armor, resistance, reduction } = enemy
				if (item.damageType === 'element') {
					resultB -= resistance
				} else {
					resultB -= armor
				}
				resultB -= reduction
			}
		})
		return [resultA, resultB]
	}
	const getMaxDamage = (data: DamageItem[]) => {
		let res = 0
		data.forEach((item) => {
			res += Number(item.damageDice * item.damageCount)
			if (item.damageAdd) {
				res += Number(item.damageAdd)
			}
		})
		return res * 4
	}

	const handleSubmit = async ({ time }: { time: number }) => {
		if (!own?.damage) return messageApi.error('还未设置装备')
		const damage = own.damage as DamageItem[]
		const { type, reLoading, rateMode, rateValue } = own
		const { confront } = enemy ?? {
			confront: false
		}
		const max = getMaxDamage(damage)
		const data1: number[] = await [...Array(max + 1)].map(() => 0)
		const data2: number[] = await [...Array(max + 1)].map(() => 0)
		const xAxisList: number[] = []
		for (let i = 0; i <= max; i++) {
			xAxisList.push(i)
		}
		setXAxisList(xAxisList)
		for (let i = 1; i <= time; i++) {
			let isReload = true
			if (type === 'long' && reLoading === 'yes' && i % 2 === 0) {
				isReload = rollDice(rateMode as number) >= Number(rateValue)
			}
			let result: number[] = [0, 0]
			if (isReload) {
				const hitResult = rollToHit(0, 0, confront as boolean)
				if (hitResult.isCritical && hitResult.isDefenderFumble) {
					result = rollDamage(damage as DamageItem[], enemy as EnemyItem, 4)
				} else if (hitResult.isCritical) {
					result = rollDamage(damage as DamageItem[], enemy as EnemyItem, 2)
				} else if (hitResult.isFumble) {
					result = [0, 0]
				} else if (hitResult.isDefenderCritical) {
					result = [0, 0]
				} else if (hitResult.isDefenderFumble) {
					result = rollDamage(damage as DamageItem[], enemy as EnemyItem, 2)
				} else if (hitResult.isHit) {
					result = rollDamage(damage as DamageItem[], enemy as EnemyItem, 1)
				} else {
					result = [0, 0]
				}
			}
			data1[result[0]] = data1[result[0]] + 1
			data2[result[1]] = data2[result[1]] + 1
		}
		setList(data1)
		setBList(data2)
	}

	const handleSave = () => {
		return messageApi.warning('功能开发中')
		const id = dayjs().unix().toString()
		localforage
			.setItem(id, { ...own, id })
			.then(() => {
				messageApi.success('保存成功')
			})
			.catch(() => {
				messageApi.error('保存失败，请重试')
			})
	}

	return (
		<>
			{contextHolder}
			<Wrapper>
				<Form
					colon={false}
					form={form}
					wrapperCol={{ span: 24 }}
					onFinish={handleSubmit}
				>
					<Row gutter={24}>
						<Col span={2}>
							<Form.Item noStyle>
								<a href='' target='_blank'>
									<Logo src={logo} />
								</a>
							</Form.Item>
						</Col>
						<Col span={4}>
							<Form.Item
								name={'time'}
								label='测试次数'
								rules={[{ required: true }, { validator: validateBIGINT }]}
							>
								<Input placeholder='请输入' />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item noStyle>
								<BtnGroup>
									<Button
										type='primary'
										htmlType='submit'
										style={{ marginRight: '16px' }}
									>
										开始测试
									</Button>
									<Button
										type='primary'
										style={{
											marginRight: '16px',
											backgroundColor: Color.SuccessColor
										}}
										onClick={() => {
											setType('own')
											setOpen(true)
										}}
									>
										装备设置
									</Button>
									<Button
										type='primary'
										danger
										style={{ marginRight: '16px' }}
										onClick={() => {
											setType('enemy')
											setOpen(true)
										}}
									>
										木桩设置
									</Button>
									<Button type='primary' onClick={handleSave}>
										保存
									</Button>
								</BtnGroup>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Wrapper>
			<Wrapper>
				<InfoWrapper>
					<InfoBox type={'own'} data={own} />
					<InfoBox type={'enemy'} data={enemy} />
				</InfoWrapper>
				<EchartsBox>
					<ECharts option={option} />
				</EchartsBox>
			</Wrapper>
			<SettingDrawer
				open={open}
				settingType={settingType}
				onClose={() => setOpen(false)}
				handleSubmit={handleSetObj}
			/>
		</>
	)
}

const Wrapper = styled.div`
	padding: 24px;
	background: ${Color.BackgroundWhite};
	border-radius: 8px;
	margin-bottom: 16px;
`
const Logo = styled.img`
	height: 6em;
	will-change: filter;
	transition: filter 300ms;
	border-radius: 50%;

	&:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
`
const EchartsBox = styled.div`
	height: 50vh;
	width: 90vw;
`
const BtnGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const InfoWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`
