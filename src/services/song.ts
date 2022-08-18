import http from '@/utils/http'

export const apiSong = {
  details: (ids: string[]) => http.get('/song/detail', { params: { ids: ids.join(',') } }),

  // 歌曲的音频 url
  url: (ids: string[]) =>
    http.get<{ data: { id: string; url: string; size: number }[] }>('/song/url', { params: { id: ids.join(',') } }),
}
