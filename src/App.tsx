import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Todo } from './pages/Todo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/todo" component={Todo} />
    </Switch>
  </BrowserRouter>
)

export default App
