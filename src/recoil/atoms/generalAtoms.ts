import { atom } from 'recoil'
import { ROLE } from '../../constants'

interface LoggedInUser {
  photoURL?: string
  displayName: string
  uid: string
  role: ROLE
}

/**
 * Contains loggedInUser
 */
export const loggedInUserAtom = atom<LoggedInUser | null>({
  key: 'loggedInUser',
  default: null,
})
