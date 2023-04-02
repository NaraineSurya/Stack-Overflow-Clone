import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path ='/Questions' element={<Questions />} />
    </Routes>
  )
}

export default AllRoutes
