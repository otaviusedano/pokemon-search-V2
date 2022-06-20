import React from 'react'

import './styles.scss'

function Pagination ({ offset, limit, total, setOffset }) {
  const current = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(total / limit)

  function onPageChange (page) {
    setOffset((page - 1) * limit)
  }

  function nextPage () {
    if (current >= pages) {
      onPageChange(1)
    } else {
      onPageChange(current + 1)
    }
  }

  function prevPage () {
    if (current <= 1) {
      onPageChange(pages)
    } else {
      onPageChange(current - 1)
    }
  }

  return (
    <div className='container-buttons'>
      <button onClick={() => prevPage()} type='button' >{'<'}</button>
        <span>{current} /</span>
        <span>{pages}</span>
      <button onClick={() => nextPage()} type='button' >{'>'}</button>
    </div>
  )
}

export default Pagination