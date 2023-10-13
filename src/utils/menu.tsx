import * as R from 'ramda'
import { ReactNode } from 'react'
import { matchPath, Route } from 'react-router-dom'
import { Menu } from '@/types'

type ItemType = {
	label: string
	key: string
	icon?: ReactNode
	code?: string
	children?: ItemType[]
	auth?: string[]
}

const findRecursively = <P extends { children?: P[] }>(
	key: keyof P,
	value: string,
	items: P[]
): P[] => {
	for (const item of items) {
		if (matchPath(item[key] as unknown as string, value)) {
			return [item]
		}

		if (item.children?.length) {
			const paths = findRecursively(key, value, item.children)
			if (paths.length) {
				return [item, ...paths]
			}
		}
	}

	return []
}

export const getKeyPathOf = (key: string, items: ItemType[]): string[] =>
	findRecursively<ItemType>('key', key, items).map((v) => v.key)

const toMenuRoute = ({ path, page }: Menu) =>
	page ? <Route key={path} path={path} element={page} /> : undefined

export const getMenuRoutes = (menus?: Menu[]): JSX.Element[] => {
	const nestedRoutes =
		menus?.map((menu) => [
			toMenuRoute(menu),
			...getMenuRoutes(menu.children)
		]) ?? []

	return R.flatten(nestedRoutes).filter((v: any): v is JSX.Element => !!v)
}

const toNavigationItem = (permissions: string[]) => {
	return ({
		title,
		hidden,
		children,
		path,
		permission,
		...rest
	}: Menu): ItemType | undefined => {
		if (hidden) {
			return undefined
		}

		const subItems =
			children &&
			getNavigationItems({
				menus: children,
				permissions
			})

		return {
			label: title,
			key: path,
			children: subItems?.length ? subItems : undefined,
			auth: permission,
			...rest
		}
	}
}

const getNavigationItemByAuth = function (
	_v: ItemType | undefined,
	permission: string[],
	auth?: string[],
	code?: string
) {
	if (!auth) {
		return code ? permission.includes(code) : true
	}

	return permission.some((item) => {
		return auth.includes(item)
	})
}

type navigationItemsProps = {
	menus: Menu[]
	permissions: string[]
}

export const getNavigationItems = ({
	menus,
	permissions
}: navigationItemsProps): ItemType[] => {
	// if (account?.role === UserAccountRole.Owner) {
	// 	return menus
	// 		.map(toNavigationItem(permissions, toggleEnabled, account))
	// 		.filter((v): v is ItemType => {
	// 			return !!v
	// 		})
	// }
	return menus
		.map(toNavigationItem(permissions))
		.filter(
			(v): v is ItemType =>
				!!(
					v?.label && getNavigationItemByAuth(v, permissions, v?.auth, v?.code)
				)
		)
}
