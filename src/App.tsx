/**
 * @name App
 * @description 主程序
 * @author darcrand
 */

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Entry from './pages/Entry'
import Login from './pages/Login'
import PlaylistDetail from './pages/PlaylistDetail'
import Song from './pages/Song'
import TabFind from './pages/TabFind'
import TabMine from './pages/TabMine'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Entry />}>
          <Route index element={<Navigate to='find' />} />
          <Route path='find' element={<TabFind />} />
          <Route path='mine' element={<TabMine />} />
        </Route>

        <Route path='/playlist/:id' element={<PlaylistDetail />} />
        <Route path='/song/:id' element={<Song />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
