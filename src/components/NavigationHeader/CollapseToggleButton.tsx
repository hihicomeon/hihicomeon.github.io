import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

type CollapseToggleButtonProps = {
	collapsed: boolean
	onChange: (collapsed: boolean) => void
}

export const CollapseToggleButton = ({
	collapsed,
	onChange
}: CollapseToggleButtonProps) =>
	collapsed ? (
		<MenuUnfoldOutlined
			onClick={() => onChange(false)}
			name='#iconmenufold'
			style={{ fontSize: '24px' }}
			className='navigation-header-icon'
		/>
	) : (
		<MenuFoldOutlined
			onClick={() => onChange(true)}
			name='#iconmenuunfold'
			style={{ fontSize: '24px' }}
			className='navigation-header-icon'
		/>
	)
