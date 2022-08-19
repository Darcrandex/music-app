/**
 * @name TabFind
 * @description 发现
 * @author darcrand
 */

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useMount } from 'ahooks'
import { apiPlaylist } from '@/services/playlilst'
import { apiHome } from '@/services/homepage'
import { Link } from 'react-router-dom'
import TopNavBar from '@/components/TopNavBar'
import { useSafeArea } from '@/stores/safe-area'

const TabFind: React.FC = () => {
  useMount(() => {
    const img = new Image()
    console.log('oooo', window.location)

    img.onload = () => {
      console.log('load img')
    }

    img.onerror = (e) => {
      console.log('load error', e)
    }

    img.src = 'http://p2.music.126.net/UCRS2tO2tZbkGmq6rj4l0A==/109951165491046990.jpg'
  })

  const { safeArea } = useSafeArea()
  const contentHeight =
    window.innerHeight -
    safeArea.statusBarHeight -
    safeArea.topNavBarHeight -
    safeArea.bottomTabsHeight -
    safeArea.paddingBottom

  const { data } = useQuery({ queryKey: 'playlist', queryFn: apiPlaylist.category })
  const { data: homeblock } = useQuery({ queryKey: 'home-block-page', queryFn: apiHome.block })
  const { data: toplist } = useQuery({ queryKey: 'top-list', queryFn: apiPlaylist.top })

  return (
    <>
      <TopNavBar>find</TopNavBar>

      <main style={{ height: contentHeight }} className='overflow-y-auto'>
        <img
          className='w-1/2 h-32 bg-red-200 border'
          src='https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0C/ChMkJlwbaPmIfjr8AAHXNlQ9tyQAAt5PAMXql0AAddO522.jpg'
          alt=''
        />

        <hr />

        {toplist?.data?.playlists?.map((v) => (
          <div key={v.id}>
            <img src={v.coverImgUrl} alt='' className='w-full bg-gray-100' />
            <Link to={`/playlist/${v.id}`}>{v.name}</Link>
          </div>
        ))}
      </main>
    </>
  )
}

export default TabFind
