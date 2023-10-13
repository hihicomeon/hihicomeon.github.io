import { Menus } from '@/consts/menu'
import { removeNillOrEmpty } from '@/utils/removeNillOrEmpty'
import { Menu } from '@/types/index'

export function flattenTree(menus: Menu[]): Menu[] {
	return menus.reduce((acc: Menu[], cur: Menu) => {
		const newCur = removeNillOrEmpty({
			...cur,
			children: undefined,
			page: undefined
		})
		if (cur.children) {
			const datas = flattenTree(cur.children)

			return [...acc, newCur, ...datas]
		}
		return [...acc, newCur]
	}, [])
}

export const extractMenusTree = (): Menu[] => {
	return flattenTree(Menus)
}
