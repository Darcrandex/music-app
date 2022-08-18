/**
 * @name PlaylistDetail
 * @description 歌单详情
 * @author darcrand
 */

import { apiPlaylist } from '@/services/playlilst'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

const PlaylistDetail: React.FC = () => {
  const { id } = useParams()

  const { data: detail } = useQuery({
    queryKey: ['playlist-detail', id],
    queryFn: () => apiPlaylist.detail(id as string),
  })

  useEffect(() => {
    console.log('dddddddd', detail)
  }, [detail])

  return (
    <>
      <h1>PlaylistDetail</h1>

      {detail?.data?.playlist?.tracks?.map((v) => (
        <div key={v.id}>
          <Link to={`/song/${v.id}`}>{v.name}</Link>
        </div>
      ))}
    </>
  )
}

export default PlaylistDetail
