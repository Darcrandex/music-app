/**
 * @name Entry
 * @description
 * @author darcrand
 */

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Entry: React.FC = () => {
  return (
    <>
      <section className='flex flex-col h-screen'>
        <main className='flex-1 overflow-y-auto'>
          <Outlet />
        </main>

        <footer className='flex items-center justify-around h-20 bg-red-200'>
          <NavLink to='/find'>Find</NavLink>
          <NavLink to='/mine'>Mine</NavLink>
        </footer>
      </section>
    </>
  )
}

export default Entry
