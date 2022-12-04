import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Home } from '../Pages/Home'
import { HostelDetail } from '../Pages/HostelDetail'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/hostel/:id' element={<HostelDetail/>}></Route>
          </Routes>
    </div>
  )
}
