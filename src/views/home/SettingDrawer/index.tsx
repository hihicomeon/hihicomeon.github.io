import { DamageType, Dice, WeaponType } from '@/consts/dictsMap'
import { validateNumber, validateNumberCanBeNull } from '@/validators/number'
import {
	Button,
	Col,
	Drawer,
	Form,
	Input,
	Radio,
	Row,
	Select,
	Switch
} from 'antd'
import styled from 'styled-components'
import { PlusSquareOutlined, CloseOutlined } from '@ant-design/icons'
import { Color } from '@/styles/color'
import { DamageItem } from '@/types'

type SettingDrawerProps = {
	open: boolean
	settingType: string
	onClose: () => void
	handleSubmit: (data: any, type: string) => void
}

enum FormName {
	ID = 'id',
	NAME = 'name',
	TYPE = 'type',
	RELOADING = 'reLoading',
	RATE_MODE = 'rateMode',
	RATE_VALUE = 'rateValue',
	DICE = 'dice',
	FREQUENCY = 'frequency',
	DAMAGE = 'damage',
	DAMAGE_TYPE = 'damageType',
	DAMAGE_DICE = 'damageDice',
	DAMAGE_COUNT = 'damageCount',
	DAMAGE_ADD = 'damageAdd',
	MARK = 'mark',
	CONFRONT = 'confront',
	ARMOR = 'armor',
	RESISTANCE = 'resistance',
	DODGE = 'dodge',
	REDUCTION = 'reduction'
}

export type FormValues = Record<
	FormName,
	string | number | boolean | DamageItem[]
>

export const SettingDrawer = ({
	open,
	settingType,
	onClose,
	handleSubmit
}: SettingDrawerProps) => {
	const [form] = Form.useForm()
	const { TextArea } = Input

	const type = Form.useWatch('type', form)
	const reLoading = Form.useWatch('reLoading', form)
	const handleFinish = (data: FormValues) => {
		handleSubmit(data, settingType)
		handleClose()
	}

	const handleClose = () => {
		onClose()
	}
	return (
		<Drawer
			title={settingType === 'own' ? '装备设置' : '木桩设置'}
			onClose={onClose}
			open={open}
			maskClosable={false}
			width={'40vw'}
			destroyOnClose
		>
			<Form
				colon={false}
				form={form}
				wrapperCol={{ span: 24 }}
				layout='vertical'
				onFinish={handleFinish}
			>
				{settingType === 'own' && (
					<>
						<Form.Item name={FormName.ID} hidden>
							<Input />
						</Form.Item>
						<Form.Item
							name={FormName.NAME}
							label='装备名称'
							rules={[{ required: true }]}
						>
							<Input placeholder='请输入' />
						</Form.Item>
						<Form.Item
							name={FormName.TYPE}
							label='装备类型'
							rules={[{ required: true }]}
						>
							<Select placeholder='请选择' options={WeaponType} />
						</Form.Item>
						{type === 'long' && (
							<Form.Item
								name={FormName.RELOADING}
								label='武器填装'
								rules={[{ required: true }]}
							>
								<Radio.Group>
									<Radio value='yes'> 是 </Radio>
									<Radio value='no'> 否 </Radio>
								</Radio.Group>
							</Form.Item>
						)}
						{reLoading === 'yes' && (
							<Row gutter={24}>
								<Col span={8}>
									<Form.Item
										name={FormName.RATE_MODE}
										label='填装成功骰'
										rules={[{ required: true }]}
									>
										<Select placeholder='请选择' options={Dice} />
									</Form.Item>
								</Col>
								<Col span={8}>
									<Form.Item
										name={FormName.RATE_VALUE}
										label='成功值'
										rules={[
											{ required: true },
											{ validator: validateNumberCanBeNull }
										]}
									>
										<Input placeholder='请输入' />
									</Form.Item>
								</Col>
							</Row>
						)}
						<Form.Item name={FormName.MARK} label='装备描述'>
							<TextArea
								placeholder='请输入'
								showCount
								autoSize={{ minRows: 3, maxRows: 4 }}
							/>
						</Form.Item>
						<BodyWrapper>
							<Form.List name={FormName.DAMAGE} initialValue={[{}]}>
								{(fields, { add, remove }) => (
									<>
										{fields.map(({ key, name, ...restField }) => (
											<FormWrapper key={key}>
												<Form.Item
													name={[name, FormName.DAMAGE_TYPE]}
													label='武器伤害属性'
													rules={[{ required: true }]}
												>
													<Select placeholder='请选择' options={DamageType} />
												</Form.Item>
												<Row gutter={24}>
													<Col span={8}>
														<Form.Item
															{...restField}
															name={[name, FormName.DAMAGE_DICE]}
															label='伤害骰'
															hasFeedback
															rules={[
																{ required: true, message: '请选择骰值' }
															]}
														>
															<Select placeholder='请选择' options={Dice} />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															{...restField}
															name={[name, FormName.DAMAGE_COUNT]}
															label='骰值次数'
															rules={[
																{
																	required: true,
																	validator: validateNumber
																}
															]}
														>
															<Input placeholder='请输入' />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															{...restField}
															name={[name, FormName.DAMAGE_ADD]}
															label='伤害加值'
															rules={[
																{
																	validator: validateNumberCanBeNull
																}
															]}
														>
															<Input placeholder='请输入' />
														</Form.Item>
													</Col>
												</Row>
												{fields.length > 1 && (
													<DelBtn>
														<CloseOutlined onClick={() => remove(name)} />
													</DelBtn>
												)}
											</FormWrapper>
										))}
										<Form.Item>
											<AddBtn>
												<Button
													type='dashed'
													onClick={() => {
														add()
														setTimeout(() =>
															form.scrollToField('scroll_bottom')
														)
													}}
													block
													icon={<PlusSquareOutlined />}
													disabled={fields.length >= 10}
												>
													添加伤害判定
												</Button>
											</AddBtn>
										</Form.Item>
									</>
								)}
							</Form.List>
							<div id='scroll_bottom'></div>
						</BodyWrapper>
					</>
				)}
				{settingType !== 'own' && (
					<>
						<Form.Item
							name={FormName.CONFRONT}
							valuePropName='checked'
							label='开启命中对抗'
						>
							<Switch checkedChildren='开启' unCheckedChildren='关闭' />
						</Form.Item>
						<Form.Item
							name={FormName.ARMOR}
							label='护甲'
							rules={[
								{
									validator: validateNumberCanBeNull
								}
							]}
						>
							<Input placeholder='请输入' />
						</Form.Item>
						<Form.Item
							name={FormName.RESISTANCE}
							label='魔抗'
							rules={[
								{
									validator: validateNumberCanBeNull
								}
							]}
						>
							<Input placeholder='请输入' />
						</Form.Item>
						<Form.Item
							name={FormName.DODGE}
							label='闪避'
							rules={[
								{
									validator: validateNumberCanBeNull
								}
							]}
						>
							<Input placeholder='请输入' />
						</Form.Item>
						<Form.Item
							name={FormName.REDUCTION}
							label='减伤'
							rules={[
								{
									validator: validateNumberCanBeNull
								}
							]}
						>
							<Input placeholder='请输入' />
						</Form.Item>
					</>
				)}
				<Form.Item noStyle>
					<BtnGroup>
						<Button
							type='primary'
							style={{
								marginRight: '16px',
								backgroundColor: `${Color.ErrorColor}`
							}}
							onClick={handleClose}
						>
							取消
						</Button>
						<Button
							type='default'
							style={{
								marginRight: '16px'
							}}
							onClick={() => form.resetFields()}
						>
							清空
						</Button>
						<Button
							type='primary'
							htmlType='submit'
							style={{ marginRight: '16px' }}
						>
							确定
						</Button>
					</BtnGroup>
				</Form.Item>
			</Form>
		</Drawer>
	)
}

const BodyWrapper = styled.div`
	width: 100%;
	padding: 20px;
	height: 700px;
	overflow-x: hidden;
	overflow-y: auto;
`

const FormWrapper = styled.div`
	border: 1px solid ${Color.BorderColor};
	border-radius: 4px;
	padding: 24px 24px 0 24px;
	margin-bottom: 24px;
	position: relative;
`

const BtnGroup = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const AddBtn = styled.div`
	padding: 0 5vw;
`
const DelBtn = styled.div`
	position: absolute;
	top: -12px;
	right: -12px;
	width: 24px;
	height: 24px;
	background-color: ${Color.BorderColor};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: all 0.3s;
	&:hover {
		background-color: ${Color.ErrorColor};
		color: ${Color.TextWhite};
	}
`
