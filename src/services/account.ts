import { http } from '@/utils/http'

export const apiAccount = {
  // 发送验证码
  captcha: (phone: string) => http.get('/captcha/sent', { params: { phone } }),

  // 手机,验证码登录
  login: (params: { phone: string; captcha: string }) => http.get('/login/cellphone', { params }),
}
