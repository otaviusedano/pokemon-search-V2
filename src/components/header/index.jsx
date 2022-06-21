import React from 'react'

import './styles.scss'

function Header ({ search, filter, setFilter }) {
  const handleSubmit = (e) => e.preventDefault()

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={filter}
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Procure um Pokemon"
          />
          <button
            disabled={filter.length === 0}
            onClick={() => search()}
            type='submit'>
            Procurar
          </button>
        </label>
      </form>
    </header>
  )
}

export default Header
