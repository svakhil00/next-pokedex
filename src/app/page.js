import Image from 'next/image';
import { getPokemon } from './helpers';
import { getPicture } from './helpers';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableCell,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
} from "@/components/ui/card"



export default async function Home() {

  const pokemonList = []
  for (let i = 1; i < 26; i++) {
    pokemonList[i] = (await getPokemon(i));
  }


  const pokemon = pokemonList.map((info) => {
    const name = info.Item.name.S.charAt(0).toUpperCase() + info.Item.name.S.slice(1)
    const number = "#" + info.Item.id.N.padStart(4, '0')
    return (
      <div className="border-spacing-10" key={info.Item.id.N}>
        <a href={`/${info.Item.id.N}`}>
          {makeCard(info, name, number)}
        </a>
      </div>
    )
  });

  return (
    <div className="h-screen">
      <h1 className="text-6xl font-bold text-center bg-red-600 text-white h-[10%]">Pokedex</h1>
      <div className='bg-slate-950 h-[90%]'>
        <ScrollArea className="rounded-md border p-8 h-full">
          <div className="flex flex-wrap bg-slate-950 gap-10 justify-center">
            {pokemon}
          </div>
        </ScrollArea>
      </div>

    </div>
  )
}

function makeCard(info, name, number) {
  return (
    <Card className="w-[250px] bg-slate-200">
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div>
            <Image src={getPicture(info)} width={250} height={250} alt="Image Not Found"></Image>
          </div>
          <div>
            <Label htmlFor="name">{name}<br></br>{number}</Label>
          </div>
        </div>
      </CardContent>
    </Card>

  )
}
