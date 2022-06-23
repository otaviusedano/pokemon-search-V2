import React, { useContext } from 'react'

import { PokemonContext } from '../../contexts/pokemonContext'
import './styles.scss'

function Pagination () {
  const {
    defaultLimit,
    pokemonsTotal,
    offset,
    setOffset,
    result
  } = useContext(PokemonContext)

  const current = offset ? Math.floor(offset / defaultLimit) + 1 : 1
  const pages = !result ? Math.ceil(pokemonsTotal / defaultLimit) : 1

  function onPageChange (page) {
    setOffset((page - 1) * defaultLimit)
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
    <footer>
      <div className='container-buttons'>
        <button onClick={() => prevPage()} type='button' >{'<'}</button>
        <div className='container-page'>
          <span>{!result ? current : 1} /</span>
          <span>{pages}</span>
        </div>
        <button onClick={() => nextPage()} type='button' >{'>'}</button>
      </div>
    </footer>
  )
}

export default Pagination
