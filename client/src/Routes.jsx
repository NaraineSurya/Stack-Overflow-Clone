import React from 'react'
import {Switch , Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' Component='Home'></Route>
    </Switch>
  )
}

export default Routes
