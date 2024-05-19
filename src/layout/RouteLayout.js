import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div className='rout-layout'>
      <header>
        <nav>
          <h1>JobHunt</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RouteLayout
