import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

const stateAtom = atom({
  key: 'safe-area',
  default: {
    statusBarHeight: 44, // 顶部状态栏的高度（刘海）
    paddingBottom: 20, // 底部安全高度（小滑块）
    topNavBarHeight: 0, // 头部导航的内容高度
    bottomTabsHeight: 0, // 底部tabs的内容高度
  },
})

export function useSafeArea() {
  const [safeArea, setState] = useRecoilState(stateAtom)

  const setNavHeight = useCallback((height: number) => {
    setState((curr) => ({ ...curr, topNavBarHeight: height }))
  }, [])

  const setTabsHeight = useCallback((height: number) => {
    setState((curr) => ({ ...curr, bottomTabsHeight: height }))
  }, [])

  return { safeArea, setNavHeight, setTabsHeight }
}
