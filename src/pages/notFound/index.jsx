import React from 'react'

import { Link } from 'react-router-dom'

function NotFound () {
  return (
    <>
      <h1>Não achamos este Pokemon. <Link to='/'>Click aqui para voltar</Link></h1>
    </>
  )
}

export default NotFound
