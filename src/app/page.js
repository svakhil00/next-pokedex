import Link from 'next/link'
import Image from 'next/image'
import PokemonDatabase from './pokemonDatabase'
import NumberedPokemonDatabase from './numberedPokemonDatabase'

export default function Home() {
  const keys = Object.keys(NumberedPokemonDatabase)

  const pokemon = keys.map((pName) => {
    return (
      <div key={pName}>
        <p>
          <Image
            src={`/p${pName}.png`}
            width={250}
            height={250}
            alt="Pikachu"
          /></p>
        <p><Link href={`/${NumberedPokemonDatabase[pName]}`}>{NumberedPokemonDatabase[pName]}</Link></p>
      </div>
    )
  }
  )
  return (
    <div>
      <h1>Pokedex</h1>
      {pokemon}
    </div>
  )
}
