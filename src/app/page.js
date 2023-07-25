import Image from 'next/image';
import { getColor, getPokemon, getPicture, getAllPokemon, testQuery } from './helpers';
import { Label } from '../components/ui/label';
import { ScrollArea } from '../components/ui/scroll-area';
import Header from '../components/ui/header';
import Filtering from '../components/ui/filtering';
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
  const pokemonList = (await getAllPokemon()).Items
  pokemonList.sort((a, b) => (parseInt(a.id.N) > parseInt(b.id.N)) ? 1 : -1)
  const pokemon = pokemonList.map((info) => {
    //const types = info.varieties.L[0].M.types.L.map((type) => type.S).join("")
    const ID = (info.name.S + info.id.N)
    return (
      < div class="pokemon" className="border-spacing-10" key={info.name.S} id={ID} >
        <a href={`/${info.id.N}`}>
          {makeCard(info)}
        </a>
      </div >
    )
  });


  return (
    <div className="h-screen w-screen">
      <Header />
      <div className='bg-slate-950 h-[90%]'>
        <div className="h-[10%] p-2 flex justify-center items-center">
          <Input className="w-[500px]" id="searchbar"></Input>
        </div>
        <div className="flex flex-row h-[90%]">
          {/* <div className="w-[10%]">
            <ScrollArea className="h-full">
              <Filtering />
            </ScrollArea>
          </div> */}
          <ScrollArea id="scrollArea" className="rounded-md h-full w-[100%]">
            <div id="pokemonList" className="flex flex-wrap bg-slate-950 gap-10 justify-center">
              {pokemon}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}