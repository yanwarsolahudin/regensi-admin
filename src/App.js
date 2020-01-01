import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppAuthentication from './app-authentication/AppAuthentication';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AppAuthentication} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;