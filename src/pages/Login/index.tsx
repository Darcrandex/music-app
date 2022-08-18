/**
 * @name Login
 * @description 登录页面
 * @author darcrand
 */

import { apiAccount } from '@/services/account'
import React, { useCallback, useState } from 'react'

const Login: React.FC = () => {
  const [form, setForm] = useState({ phone: '', captcha: '' })

  const onSend = async () => {
    await apiAccount.captcha(form.phone)
  }

  const onLogin = async () => {
    const res = await apiAccount.login(form)
    console.log('login', res)
  }

  return (
    <>
      <h1>Login</h1>

      <input type='text' value={form.phone} onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))} />
      <input type='text' value={form.captcha} onChange={(e) => setForm((c) => ({ ...c, captcha: e.target.value }))} />
      <button onClick={onSend} disabled={!form.phone}>
        send
      </button>

      <button onClick={onLogin} disabled={!form.phone || !form.captcha}>
        login
      </button>
    </>
  )
}

export default Login
