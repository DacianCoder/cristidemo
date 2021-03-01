import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from '../assets/images/images'
import DynamicFormattedMessage from './common/ui/DynamicFormattedMessage'

export const Navbar: React.FC = () => (
  <header className="navbar">
    <div className="container">
      <nav className="navbarNav">
        <NavLink to="/" className="navbarBrand">
          <img src={logo} className="dBlock" alt="Logo" />
        </NavLink>
        <ul className="navbarItems mlAuto">
          <li className="navbarItem">
            <DynamicFormattedMessage
              id="home"
              tag={NavLink}
              activeClassName="navbarLinkActive"
              className="navbarLink"
              to="/"
            />
          </li>
          <li className="navbarItem">
            <DynamicFormattedMessage
              id="todo"
              tag={NavLink}
              activeClassName="navbarLinkActive"
              className="navbarLink"
              to="/todo"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
