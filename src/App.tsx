import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import * as S from './styles'

import './style.css'

import { Base } from './containers'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Base />
      </Route>
      <Route path="/about">
        <div>
          <p>sobre</p>
        </div>
      </Route>
    </Switch>
  </Router>
)

export default App
