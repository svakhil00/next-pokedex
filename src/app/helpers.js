export async function getPokemon(name) {
    const fetchedRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonJSON = await fetchedRequest.json()
    return pokemonJSON
}