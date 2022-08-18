import http from '@/utils/http'

export const apiPlaylist = {
  category: () => http.get('/playlist/catlist'),

  top: () => http.get<{ playlists: { id: string; name: string; coverImgUrl: string }[] }>('/top/playlist/highquality'),

  detail: (id: string) =>
    http.get<{
      playlist: {
        coverImgUrl: string
        name: string
        description: string
        tracks: { id: string; name: string }[]
      }
    }>('/playlist/detail', { params: { id } }),
}
