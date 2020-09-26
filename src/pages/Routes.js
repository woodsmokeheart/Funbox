import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import AboutPage from './AboutPage/AboutPage'

const Routes = () => (
  <Switch>
    <Route
      exact
      component={MainPage}
      path='/main'
    />
    <Route
      exact
      component={AboutPage}
      path='/inter'
    />
  </Switch>
)

export default Routes