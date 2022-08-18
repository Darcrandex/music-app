/**
 * @name TabFind
 * @description 发现
 * @author darcrand
 */

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { apiPlaylist } from '@/services/playlilst'
import { apiHome } from '@/services/homepage'
import { Link } from 'react-router-dom'

const TabFind: React.FC = () => {
  const { data } = useQuery({ queryKey: 'playlist', queryFn: apiPlaylist.category })
  const { data: homeblock } = useQuery({ queryKey: 'home-block-page', queryFn: apiHome.block })
  const { data: toplist } = useQuery({ queryKey: 'top-list', queryFn: apiPlaylist.top })

  useEffect(() => {
    console.log('list', data)
    console.log('homeblock', homeblock)
    console.log('toplist', toplist)
  }, [data, homeblock, toplist])

  return (
    <>
      <section>
        {toplist?.data?.playlists?.map((v) => (
          <div key={v.id}>
            <img src={v.coverImgUrl} alt='' />
            <Link to={`/playlist/${v.id}`}>{v.name}</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default TabFind
