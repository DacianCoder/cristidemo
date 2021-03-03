import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import InstallPWA from '../components/InstallPWA'
import DynamicFormattedMessage from '../components/common/ui/DynamicFormattedMessage'
import { signInWithGoogle } from '../api/firebase'
import { loggedInUserAtom } from '../recoil/atoms/generalAtoms'

export const Home: FC = () => {
  const history = useHistory()
  const loggedUser = useRecoilValue(loggedInUserAtom)
  return (
    <section className='container pt5'>
      <div className='dFlex justifyContentCenter'>
        {!loggedUser && <button
          className='btn btnPrimary'
          onClick={() => signInWithGoogle(history)}
          style={{ backgroundColor: '#349eeb' }}
        >
          <img
            src='https://img.icons8.com/color/32/000000/google-logo.png'
            width={16}
            alt='google logo'
          />
          <DynamicFormattedMessage id='label.signup.google' />
        </button>}
      </div>
      <div className='textCenter mb2 mt2'>
        <h1>Would You like to take a questionnaire?</h1>
      </div>
      <div className='dFlex justifyContentCenter'>
        <InstallPWA />
      </div>

    </section>
  )
}
