import React, { useContext } from 'react'

import { PokemonContext } from '../../contexts/pokemonContext'

import './styles.scss'

function Header () {
  const {
    filterName,
    setFilterName,
    searchPokemon,
    handleSubmit
  } = useContext(PokemonContext)

  const handleChange = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={filterName}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Procure um Pokemon"
          />
          <button
            disabled={!filterName.length}
            onClick={() => searchPokemon()}
            type='submit'>
            Procurar
          </button>
        </label>
      </form>
    </header>
  )
}

export default Header
