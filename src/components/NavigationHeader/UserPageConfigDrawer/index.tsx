import { Drawer } from '@/components/Drawer'
// import { HistoryRouteCard } from './HistoryRouteCard'

type UserPageConfigDrawerProps = {
	open: boolean
	onCancel: () => void
}

export const UserPageConfigDrawer = ({
	open,
	onCancel
}: UserPageConfigDrawerProps) => {
	return (
		<Drawer
			title='页面设置'
			width={504}
			open={open}
			onClose={onCancel}
			getContainer={false}
			destroyOnClose
			headerStyle={{
				padding: 25
			}}
			bodyStyle={{
				padding: 24
			}}
			isClose
			zIndex={1100}
		>
			{/* <HistoryRouteCard /> */}
		</Drawer>
	)
}
