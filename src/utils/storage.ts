/**
 * Removes date stored at {@param slice}
 * @param slice
 */
export const removeLocalItem = (slice: string) => {
  localStorage.removeItem(slice)
}

/**
 * Stores a given value at particular key location
 * @param key
 * @param value
 */
export const storeLocally = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Parses a given local storage slice and checks the type of the value
 * else it returns the default value
 *
 * @param slice
 * @param typeCast
 * @param defaultValue
 */
/* eslint-disable @typescript-eslint/ban-types */
export const getLocalStorageData = <T = {}>(
  slice: string,
  defaultValue: T | {} = {},
  typeCast = 'object'
) => {
  try {
    /* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
    const value = JSON.parse(localStorage.getItem(slice)!!)
    // eslint-disable-next-line valid-typeof
    if (value != null && typeof value === typeCast) {
      return value as T
    }
  } catch (e) {
    // do nothing
  }
  return defaultValue as T
}
