export const storageKeys = {
  loggedInCookie: 'loggedInCookie' as const,
} as const

interface ILocalStorage {
  [storageKeys.loggedInCookie]: string | null
}

const defaultValues: ILocalStorage = {
  loggedInCookie: null,
}

type LocalStorageKey = typeof storageKeys[keyof typeof storageKeys]

/**
 * Retrieves value stored locally for {@param key} or returns default value
 *
 * @param key
 * @param defaultValue
 * @param typeCast
 */
const getLocalStorageValue = <K extends LocalStorageKey, T = ILocalStorage[K]>(
  key: K,
  defaultValue: T = (defaultValues[key] as unknown) as T,
  typeCast = 'string'
): T => {
  try {
    const item = localStorage.getItem(key)
    const value = typeCast === 'string' ? item : JSON.parse(item || '')
    // eslint-disable-next-line valid-typeof
    if (value != null && typeof value === typeCast) {
      return value as T
    }
  } catch (e) {
    // do nothing
  }

  return defaultValue
}

/**
 * Updates value for {@param key} on local storage
 * @param key
 * @param value
 */
const setLocalStorageValue = <
  K extends LocalStorageKey,
  T = typeof defaultValues[K]
>(
  key: K,
  value: T
): void => {
  localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value)
  )
}

/**
 * Removes provided key from storage
 * @param key
 */
const removeLocalStorageValue = <K extends LocalStorageKey>(key: K): void => {
  localStorage.removeItem(key)
}

const storageUtils = {
  removeLocalStorageValue,
  getLocalStorageValue,
  setLocalStorageValue,
}

export { storageUtils }
