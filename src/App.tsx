import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <p>home</p>
          </div>
        </Route>
        <Route path="/about">
          <div>
            <p>sobre</p>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
