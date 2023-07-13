import Link from 'next/link'
import Image from 'next/image'
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { getPokemon } from './helpers'
import { getPicture } from './helpers'
import card from '@/components/Card'

export default async function Home() {

  const pokemonList = new Array();
  for (let i = 1; i < 3; i++) {
    pokemonList[i] = (await getPokemon(i));
  }


  const pokemon = pokemonList.map((info) => {
    return (
      // <div key={info.Item.id}>
      //   <Image src={getPicture(info)} width={250} height={250} alt="Image Not Found"></Image>
      //   <Link href={`/${info.Item.id.N}`}>{info.Item.id.N}</Link>
      // </div>
      card(info)
    )
  });

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemon}
    </div>
  )
}
