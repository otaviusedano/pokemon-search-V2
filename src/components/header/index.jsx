import React from 'react'

import './styles.scss'

function Header ({ search, filter, setFilter }) {
  return (
    <header>
      <form className='container-search'>
        <input value={filter} type="text" onChange={(e) => setFilter(e.target.value)} />
        <button onClick={() => search()} type='button'>Procurar</button>
      </form>
    </header>
  )
}

export default Header
