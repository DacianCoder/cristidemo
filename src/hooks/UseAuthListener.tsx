import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useIntl } from 'react-intl'
import { useSetRecoilState } from 'recoil'

import { auth, fireDB, generateUserDocument } from '../api/firebase'
import { LOGGED_IN_COOKIE, RealtimeDB } from '../constants'
import { loggedInUserAtom } from '../recoil/atoms/generalAtoms'
import { storeLocally } from '../utils/storage'

export const useAuthListener = () => {
  const { formatMessage } = useIntl()
  const setLoggedInUser = useSetRecoilState(loggedInUserAtom)

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      let validUser = undefined as any
      if (!userAuth) {
        return
      }
      fireDB
        .ref(RealtimeDB.ALLOWED_USER)
        .once('value')
        .then(async (allowedUsers) => {
          ;(allowedUsers || []).forEach((allowedUser) => {
            if (validUser) {
              return
            }
            const currentUser = allowedUser?.val()
            validUser =
              currentUser?.email === userAuth?.email ? currentUser : undefined
          })
          if (!validUser) {
            await auth.signOut()
            return toast(formatMessage({ id: 'toast.generic.error' }))
          }

          const user = await generateUserDocument(userAuth)
          setLoggedInUser({ ...user, ...validUser })
          storeLocally(LOGGED_IN_COOKIE, user?.uid && { id: user?.uid })
        })
    })
  }, [])
}
