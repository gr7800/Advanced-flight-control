import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import Result from '../Pages/Result'
import Startgame from '../Pages/Startgame'
import Startpractice from '../Pages/Startpractice'
import LoginPage from '../Pages/Login'
import Signup from '../Pages/Signup'
import Admin from '../Pages/Admin'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>} />
        <Route path= "/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path= "/login" element={<LoginPage/>}/>
        <Route path= "/signup" element={<Signup/>}/>
        <Route path= "/startgame" element={<Startgame/>}/>
        <Route path= "/startpractice" element={<Startpractice/>}/>
        <Route path= "/result" element={<Result/>}/>
    </Routes>
  )
}

export default MainRoutes