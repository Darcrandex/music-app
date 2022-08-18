/**
 * @name TopNavBar
 * @description 顶部导航
 * @author darcrand
 */

import React, { PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSize } from 'ahooks'
import { useSafeArea } from '@/stores/safe-area'

type Props = { fixed?: boolean; showBack?: boolean }

const TopNavBar: React.FC<PropsWithChildren<Props>> = (props) => {
  const navigate = useNavigate()
  const { safeArea, setNavHeight } = useSafeArea()
  const refHeader = useRef<HTMLElement>(null)
  const headerSize = useSize(refHeader)

  useLayoutEffect(() => {
    setNavHeight(headerSize?.height || 0)
  }, [headerSize?.height])

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 bg-white shadow-md'
        style={{ paddingTop: safeArea.statusBarHeight }}
      >
        <section ref={refHeader} className='flex items-center'>
          <aside className='w-20'>
            {props.showBack && (
              <span className='p-2' onClick={() => navigate(-1)}>
                返回
              </span>
            )}
          </aside>
          <div className='flex-1 text-center font-bold text-lg'>{props.children}</div>
          <aside className='w-20'></aside>
        </section>
      </header>

      <div style={{ height: safeArea.statusBarHeight + safeArea.topNavBarHeight }}></div>
    </>
  )
}

export default TopNavBar
