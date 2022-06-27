import React from 'react'
import { cleanup, render } from '@testing-library/react'
import App from '../App'

// import { PokemonContext } from '../contexts/pokemonContext'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('App component', () => {
  it('should main have container-pokedex class', () => {
    const { getByRole } = render(<App />)

    expect(getByRole('main')).toHaveClass('container-pokedex')
  })

  it('should pagination on app page', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('pagination')).toBeInTheDocument()
  })
})
