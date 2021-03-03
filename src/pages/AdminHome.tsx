import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { loggedInUserAtom } from '../recoil/atoms/generalAtoms'

export const AdminHome: FC<any> = () => {
  const loggedUser = useRecoilValue(loggedInUserAtom)

  return (
    <section className="container pt5 textCenter">
      {' '}
      <h1>Welcome to admin home, {loggedUser?.displayName}</h1>
    </section>
  )
}
