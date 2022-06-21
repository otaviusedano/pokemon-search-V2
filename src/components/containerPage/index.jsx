import React from 'react'

import './styles.scss'

function ContainerPage ({ display, children }) {
  return (
    <div className={`container-${display}`}>
      {children}
    </div>
  )
}

export default ContainerPage
