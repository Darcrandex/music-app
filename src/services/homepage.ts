import http from '@/utils/http'

export const apiHome = {
  block: () => http.get('/homepage/block/page'),
}
