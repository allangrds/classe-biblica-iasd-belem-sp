import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './style.css'

import { Base, Daniel } from './containers'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Base />
      </Route>
      <Route path="/o-livro-de-daniel">
        <Daniel />
      </Route>
    </Switch>
  </Router>
)

export default App
