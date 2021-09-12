import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import BasePage from './containers/Base'
import './style.css'

const DanielPage = React.lazy(() => import('./containers/Daniel'))

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <BasePage />
      </Route>
      <Route path="/o-livro-de-daniel">
        <Suspense fallback={<div>Carregando...</div>}>
          <DanielPage />
        </Suspense>
      </Route>
    </Switch>
  </Router>
)

export default App
