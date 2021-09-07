import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import * as S from './styles'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <S.Title>home</S.Title>
          </div>
        </Route>
        <Route path="/about">
          <div>
            <S.Title>sobre</S.Title>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
