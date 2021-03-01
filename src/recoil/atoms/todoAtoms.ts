import { atom, AtomEffect } from 'recoil'
import {
  Category,
  ICategory,
  RECOIL_TODO_STORAGE_SLICE,
} from '../../constants/todo'
import { getLocalStorageData, storeLocally } from '../../utils/storage'

export interface TodoItem {
  data: string
  category: ICategory
}

/**
 * Sets a cached value on initialise
 *
 * @param setSelf
 */
const localStorageCache: AtomEffect<TodoItem[]> = ({ setSelf }) => {
  const storageValue = getLocalStorageData<TodoItem[] | null>(
    RECOIL_TODO_STORAGE_SLICE,
    null
  )
  if (storageValue !== null) {
    setSelf(storageValue)
  }
}

/**
 * Updates local cache with the current value
 *
 * @param onSet
 */
const updateLocalCacheEffect: AtomEffect<TodoItem[]> = ({ onSet }) => {
  onSet((newValue) => storeLocally(RECOIL_TODO_STORAGE_SLICE, newValue))
}

/**
 * Contains all todos used
 */
export const todoListAtom = atom<TodoItem[]>({
  key: 'todoList',
  default: [],
  effects_UNSTABLE: [localStorageCache, updateLocalCacheEffect],
})

/**
 * Contains all todos used
 */
export const todoListFilterAtom = atom<ICategory>({
  key: 'todoListFilter',
  default: Category.ALL,
})
