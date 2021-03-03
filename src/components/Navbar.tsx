import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import DynamicFormattedMessage from './common/ui/DynamicFormattedMessage'
import { loggedInUserAtom } from '../recoil/atoms/generalAtoms'
import { ROUTES } from '../api/constants'
import { auth } from '../api/firebase'
import { LOGGED_IN_COOKIE } from '../constants'

export const Navbar: React.FC = () => {
  const [loggedUser, setLoggedUser] = useRecoilState(loggedInUserAtom)

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbarNav">
          <div
            style={{
              background: `url(${loggedUser?.photoURL})`,
              backgroundSize: 'contain',
              borderRadius: 20,
              marginRight: 4,
              height: '40px',
              width: '40px',
            }}
          />
          <DynamicFormattedMessage
            tag={NavLink}
            to={ROUTES.HOME}
            className="navbarBrand"
            id="logo"
          />
          <ul className="navbarItems mlAuto">
            <li className="navbarItem">
              <DynamicFormattedMessage
                id="adminHome"
                tag={NavLink}
                activeClassName="navbarLinkActive"
                className="navbarLink"
                to={ROUTES.ADMIN_HOME}
              />
            </li>
            <li className="navbarItem">
              <DynamicFormattedMessage
                tag={NavLink}
                onClick={() => {
                  auth.signOut().then(() => {
                    localStorage.removeItem(LOGGED_IN_COOKIE)
                    setLoggedUser(null)
                  })
                }}
                to={ROUTES.HOME}
                className="btn btn-dark text-warning"
                id="label.signout"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
