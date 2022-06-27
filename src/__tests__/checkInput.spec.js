import React from 'react'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'
// import { PokemonContext } from '../contexts/pokemonContext'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Header Component', () => {
  it('should input value to equal ditto', async () => {
    const { getByPlaceholderText } = render(<App />)
    const inputElm = getByPlaceholderText('Procure um Pokemon')

    userEvent.type(inputElm, 'ditto')

    expect(inputElm).toHaveAttribute('value', 'ditto')
  })
})
