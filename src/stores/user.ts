import { atom, useRecoilState } from 'recoil'

const stateAtom = atom({ key: 'user', default: { id: '', nickname: '' } })

export function useUser() {
  const [userInfo, setInfo] = useRecoilState(stateAtom)

  const login = async () => {
    setInfo({ id: '0000', nickname: 'Tony' })
  }

  return { userInfo, login }
}
