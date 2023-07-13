import Link from 'next/link'
import Image from 'next/image'
import { getPokemon } from '../helpers'
import { getPicture } from '../helpers'
export default async function Pokemon({ params }) {
    const pokemon = await getPokemon(params.pokemon)
    const currid = parseInt(pokemon.Item.id.N)
    console.log(currid)
    const previd = currid == 1 ? 1010 : currid - 1;
    const nextid = currid == 1010 ? 1 : currid + 1;
    const [prev, next] = await Promise.all([getPokemon(previd), getPokemon(nextid)]);
    console.log(prev.Item.varieties.L);
    // const types = pokemon.Item.varieties.L[0].types.map((info) => {
    //     console.log(info)
    //     return (
    //         "test"
    //     )
    // }
    // )


    return (
        <div>
            <Link href="/">Home</Link>
            <Image src={getPicture(pokemon)} width={250} height={250} alt={params.pokemon} />
            <h1>Name: {pokemon.Item.name.S}</h1>
            <h1>Number: {pokemon.Item.id.N}</h1>
            {/* <h2>Type: {types.join(", ")}</h2> */}
            <Link href={`/${prev.Item.id.N}`}>Previous</Link>
            <Link href={`/${next.Item.id.N}`}>Next</Link>
        </div>
    )
}