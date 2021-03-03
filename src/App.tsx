import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import { AdminHome } from './pages/AdminHome'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { useAuthListener } from './hooks/UseAuthListener'
import { loggedInUserAtom } from './recoil/atoms/generalAtoms'
import { ROUTES } from './api/constants'

const App: React.FC = () => {
  useAuthListener()
  const loggedUser = useRecoilValue(loggedInUserAtom)

  if (!loggedUser) return <Home />

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={ROUTES.ADMIN_HOME} component={AdminHome} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
