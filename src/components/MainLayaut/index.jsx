import React from 'react'
import Sidebar from '../sidebar'
import Main from '../main'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Sidebar/>
        <Main/>
        <Outlet/>
    </div>
  )
}

export default MainLayout