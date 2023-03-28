import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' Component='Home'></Route>
    </Routes>
  )
}

export default AllRoutes
