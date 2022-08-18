/**
 * @name Song
 * @description 歌曲详情
 * @author darcrand
 */

import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Howl } from 'howler'

import { apiSong } from '@/services/song'

const Song: React.FC = () => {
  const { id } = useParams()
  const refSound = useRef<Howl>()
  const { data: urlRes } = useQuery({
    queryKey: ['song-url', id],
    queryFn: () => apiSong.url([id as string]),
  })

  useEffect(() => {
    console.log('url', urlRes)
    if (Array.isArray(urlRes?.data?.data) && urlRes?.data?.data?.length) {
      refSound.current = new Howl({ src: [urlRes.data.data[0].url] })
    }
  }, [urlRes])

  const onPlay = useCallback(() => {
    refSound.current?.play()
  }, [])

  const onPause = useCallback(() => {
    refSound.current?.pause()
  }, [])

  return (
    <>
      <h1>Song</h1>

      <button onClick={onPlay}>play</button>
      <button onClick={onPause}>Pause</button>
    </>
  )
}

export default Song
