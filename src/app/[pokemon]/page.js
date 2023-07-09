import Link from 'next/link'
import Image from 'next/image';
export default async function Pokemon({ params }) {
    console.log(params);

    const pokemon = await getPokemon(params.pokemon)

    const prev = await getPokemon(pokemon.id - 1)
    const next = await getPokemon(pokemon.id + 1)
    console.log(prev)
    console.log(next)
    const types = pokemon.types.map((typesJSON) => {
        return (
            typesJSON.type.name
        )
    }
    )


    return (
        <div>
            <Link href="/">Home</Link>
            <Image src={pokemon.sprites.other["official-artwork"].front_default} width={250} height={250} alt={params.pokemon} />
            <h1>Name: {pokemon.name}</h1>
            <h1>Number: {pokemon.id}</h1>
            {/* <h2>Category: {p.Category}</h2> */}
            <h2>Type: {types.join(", ")}</h2>
            {/* <h2>Weakness: {pokemonJSON.types.join(", ")}</h2> */}
            <Link href={`/${prev.name}`}>Previous</Link>
            <Link href={`/${next.name}`}>Next</Link>
        </div>
    )
}

async function getPokemon(name) {
    const fetchedRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonJSON = await fetchedRequest.json()
    return pokemonJSON
}