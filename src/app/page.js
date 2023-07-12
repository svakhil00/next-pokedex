import Link from 'next/link'
import Image from 'next/image'
import { getPokemon } from './helpers'
import PokemonDatabase from './pokemonDatabase'
import NumberedPokemonDatabase from './numberedPokemonDatabase'

export default async function Home() {
  const keys = Object.keys(NumberedPokemonDatabase)
  const AWS = require('aws-sdk');
  AWS.config.region = 'us-east-2';
  const dynamoDB = new AWS.DynamoDB();
  const params = {
    TableName: 'pokemon',
    Key: {
      "id": {
        N: "1"
      }
    }
  };

  dynamoDB.getItem(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

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
