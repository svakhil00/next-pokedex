""
import Link from 'next/link'
import Image from 'next/image'
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { getPokemon } from './helpers'
import { getPicture } from './helpers'
import card from '@/components/Card'

export default async function Home() {

  const pokemonList = new Array();
  for (let i = 1; i < 10; i++) {
    pokemonList[i] = (await getPokemon(i));
  }


  const pokemon = pokemonList.map((info) => {
    const nameNumber = info.Item.name.S.charAt(0).toUpperCase() + info.Item.name.S.slice(1) + "#" + info.Item.id.N.padStart(4, '0')
    return (
      <a href={`/${info.Item.id.N}`} key={info.Item.id.N}>
        <td >{card(info, nameNumber)}</td>
      </a>
    )
  });

  return (
    <div>
      <h1>Pokedex</h1>
      <table>{pokemon}</table>
    </div>
  )
}
