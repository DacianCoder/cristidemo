import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import { AdminHome } from './pages/AdminHome'
import { Navbar } from './components/Navbar'
import { Questionnaire } from './pages/Questionnaire'
import { useAuthListener } from './hooks/UseAuthListener'
import { loggedInUserAtom } from './recoil/atoms/generalAtoms'
import { ROUTES } from './api/constants'

const App: React.FC = () => {
  useAuthListener()
  const loggedUser = useRecoilValue(loggedInUserAtom)

  if (!loggedUser) return <Questionnaire />

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={ROUTES.ADMIN_HOME} component={AdminHome} />
        <Route path="/" component={Questionnaire} />
      </Switch>
    </>
  )
}

export default App
