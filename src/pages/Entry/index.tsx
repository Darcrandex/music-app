/**
 * @name Entry
 * @description
 * @author darcrand
 */

import { useSize } from 'ahooks'
import clsx from 'clsx'
import React, { useLayoutEffect, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSafeArea } from '@/stores/safe-area'

const tabs = [
  { to: '/find', text: 'Find', icon: '' },
  { to: '/mine', text: 'Mine', icon: '' },
]

const Entry: React.FC = () => {
  const refFooter = useRef<HTMLElement>(null)
  const footerSize = useSize(refFooter)
  const { safeArea, setTabsHeight } = useSafeArea()
  useLayoutEffect(() => {
    setTabsHeight(footerSize?.height || 0)
  }, [footerSize?.height])

  return (
    <>
      <Outlet />

      <footer className='fixed bottom-0 left-0 right-0 z-10 bg-white' style={{ paddingBottom: safeArea.paddingBottom }}>
        <section ref={refFooter} className='flex items-center justify-around'>
          {tabs.map((v) => (
            <NavLink
              key={v.to}
              to={v.to}
              className={({ isActive }) =>
                clsx('flex flex-col items-center justify-center', isActive && 'text-pink-300')
              }
            >
              <i className='w-10 h-10 bg-blue-300'></i>
              <span>{v.text}</span>
            </NavLink>
          ))}
        </section>
      </footer>

      <div style={{ height: safeArea.bottomTabsHeight + safeArea.paddingBottom }}></div>
    </>
  )
}

export default Entry
