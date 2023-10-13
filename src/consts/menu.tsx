import { Menu } from '@/types'
import { ArsenalPage } from '@/views/arsenal'
import { HomePage } from '@/views/home'
import { HomeOutlined, ShopOutlined } from '@ant-design/icons'

export const MessagePagePath = '/messages'

export const Menus: Menu[] = [
	{
		title: '首页',
		path: '/',
		page: <HomePage />,
		icon: <HomeOutlined />
	},
	{
		title: '军械库',
		path: '/arsenal',
		page: <ArsenalPage />,
		icon: <ShopOutlined />
	}
]
