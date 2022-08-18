/**
 * @name TabMine
 * @description 我的
 * @author darcrand
 */

import React from 'react'
import { Link } from 'react-router-dom'

const TabMine: React.FC = () => {
  return (
    <>
      <h1>TabMine</h1>

      <Link to='/login'>login</Link>
    </>
  )
}

export default TabMine
