import Link from 'next/link'
import Image from 'next/image'
import { getPokemon } from '../helpers'
import { getPicture } from '../helpers'
import card from '@/components/Card'


export default async function Pokemon({ params }) {
    const pokemon = await getPokemon(params.pokemon)
    const currid = parseInt(pokemon.Item.id.N)
    console.log(currid)
    const previd = currid == 1 ? 1010 : currid - 1;
    const nextid = currid == 1010 ? 1 : currid + 1;
    const [prev, next] = await Promise.all([getPokemon(previd), getPokemon(nextid)]);
    const typesList = pokemon.Item.varieties.L[0].M.types.L
    const types = pokemon.Item.varieties.L[0].M.types.L.map((info) => {
        return (
            info.S
        )
    });
    const text = (
        <div>
            <h1>Name: {pokemon.Item.name.S}</h1>
            <h1>Number: {pokemon.Item.id.N}</h1>
            <h1>Category: {pokemon.Item.genus.S}</h1>
            <h2>Types: {types.join(", ")}</h2>
            <Link href={`/${prev.Item.id.N}`}>Previous</Link>
            <Link href={`/${next.Item.id.N}`}>Next</Link>
        </div>
    )


    return (
        <div>
            <Link href="/">Home</Link>
            <p>{card(pokemon, text)}</p>
        </div>
    )
}