import React from 'react'
import { cleanup, renderHook, render } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

// import { PokemonContext } from '../contexts/pokemonContext'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Hooks from App', () => {
  it('should filterName set to the value ditto and refresh set default value', () => {
    const { result, rerender } = renderHook(({ filterName } = {}) => filterName, {
      initialProps: { filterName: 'ditto' }
    })

    expect(result.current).toBe('ditto')
    rerender()
    expect(result.current).toBe(undefined)
  })

  it('should result on click in search button set to be true', () => {
    const { getByText, getByPlaceholderText } = render(<App />)
    const { result, rerender } = renderHook(({ result } = {}) => result, {
      initialProps: { result: false }
    })

    const searchInput = getByPlaceholderText('Procure um Pokemon')
    const searchButton = getByText('Procurar')
    userEvent.type(searchInput, 'ditto')
    userEvent.click(searchButton)

    expect(result.current).toBe(true)
    rerender()
    expect(result.current).not.toBe(true)
  })
})
