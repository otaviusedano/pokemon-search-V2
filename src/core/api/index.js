const apiUrl = 'https://pokeapi.co/api/v2/'

const getName = async (pokemonName) => {
  const res = await fetch(apiUrl + `pokemon/${pokemonName}`)
  const body = await res.json()
  return body
}

export const getAll = async () => {
  const res = await fetch(apiUrl + 'pokemon?limit=20&offset=0')
  const body = await res.json()
  return body
}

export default getName
