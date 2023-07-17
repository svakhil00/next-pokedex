import Image from 'next/image';
import { getColor, getPokemon, getPicture, getAllPokemon } from './helpers';
import { Label } from '../components/ui/label';
import { ScrollArea } from '../components/ui/scroll-area';
import { Input } from '../components/ui/input';
import { makeCard } from './helpers';
import {
  Table,
  TableCell,
} from "../components/ui/table"
import {
  Card,
  CardContent,
} from "../components/ui/card"
import { Button } from '../components/ui/button';





export default async function Home() {
  //const poke = getAllPokemon()
  //console.log(poke)

  const pokemonList = []
  for (let i = 1; i < 51; i++) {
    pokemonList[i] = (await getPokemon(i));
  }

  const pokemon = pokemonList.map((info) => {
    return (
      < div class="pokemon" className="border-spacing-10" key={info.Item.name.S} id={info.Item.name.S} >
        <a href={`/${info.Item.id.N}`}>
          {makeCard(info)}
        </a>
      </div >
    )
  });




  return (
    <div className="h-screen">
      <h1 className="text-6xl font-bold text-center bg-red-600 text-white h-[10%]">Pokedex</h1>
      <div className='bg-slate-950 h-[90%]'>
        <div className="h-[10%] p-2 flex justify-center items-center">
          <Input className="w-[500px]" id="searchbar"></Input>
        </div>
        <div className="flex flex-row h-[90%]">
          <div className="w-[20%]">
            <Button>Click Me!</Button>
          </div>
          <ScrollArea id="scrollArea" className="rounded-md h-full h-[90%]">
            <div id="pokemonList" className="flex flex-wrap bg-slate-950 gap-6 justify-center">
              {pokemon}
            </div>
          </ScrollArea>
        </div>
      </div>

    </div>
  )
}




