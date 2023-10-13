import { Color } from '@/styles/color'
import { FontSize } from '@/styles/font'
import { WeaponItem } from '@/types'
import { Card } from 'antd'
import localforage from 'localforage'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from '@ant-design/icons'

export const ArsenalPage = () => {
	const { Meta } = Card
	const [list, setList] = useState<WeaponItem[]>([])

	const getItem = () => {
		localforage.keys().then((keys) => {
			localforage.getItem(keys[0]).then((value) => {
				console.log('>>>', value)
			})
		})
	}

	useEffect(() => {
		getItem()
	}, [])

	return (
		<Wrapper>
			<Title>军械库</Title>
			<Card
				style={{ width: 300 }}
				title={list[0]?.name}
				actions={[
					<SettingOutlined key='setting' />,
					<EditOutlined key='edit' />,
					<EllipsisOutlined key='ellipsis' />
				]}
			>
				<Meta title='Card title' description='This is the description' />
			</Card>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 24px;
	background: ${Color.BackgroundWhite};
	border-radius: 8px;
	margin-bottom: 16px;
`

const Title = styled.div`
	font-size: ${FontSize.XXLarge};
	color: ${Color.TextImportant};
	margin-bottom: 16px;
`
