import type { CategoryList } from '../../types'

export type homeStore = {
    msg: string
    categoryList: CategoryList
    getAllCategory: () => void
}
