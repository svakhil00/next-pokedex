import Link from 'next/link'
import Image from 'next/image'
import { getPokemon, searchByName } from '../helpers'
import { getPicture } from '../helpers'
import { Badge } from '../../components/ui/badge'
import Info, { info } from '../../components/ui/pokemon'




export default async function Pokemon({ params }) {
    const pokemon = (await getPokemon(params.pokemon)).Item
    const currid = parseInt(pokemon.id.N)
    const previd = currid == 1 ? 1010 : currid - 1;
    const nextid = currid == 1010 ? 1 : currid + 1;
    const [prev, next] = await Promise.all([getPokemon(previd), getPokemon(nextid)]);

    return (
        <div className="bg-slate-950 h-screen w-screen">
            <Info info={pokemon} prev={prev} next={next} />
        </div>
    )
}