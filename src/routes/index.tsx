import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Info from '../pages/Info'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/info' component={Info}/>
  </Switch>
)

export default Routes