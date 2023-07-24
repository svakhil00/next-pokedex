"use client"
import Image from 'next/image';
import Link from 'next/link';
import * as React from "react"
import { getPicture } from '../../app/helpers';
import { Badge } from './badge';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../../components/ui/select'

const Info = (props) => {
    const info = props.info
    const prev = props.prev
    const next = props.next
    const number = "#" + info.id.N.padStart(4, '0');
    const name = info.name.S.charAt(0).toUpperCase() + info.name.S.slice(1)
    const genus = info.genus.S

    const variations = info.varieties.L.map((info, index) => {
        return (
            <SelectItem key={index} value={index}>{info.M.name.S}</SelectItem>
        )
    })
    const links = (
        <div>
            <Link href={`/${prev.Item.id.N}`}>Previous  </Link>
            <Link href={`/${next.Item.id.N}`}>  Next</Link>
        </div>
    )

    var eFrom
    try {
        const eFromName = info.evolution.M.evolvesFrom.M.name.S.charAt(0).toUpperCase() + info.evolution.M.evolvesFrom.M.name.S.slice(1)
        const eFromID = info.evolution.M.evolvesFrom.M.id.N
        eFrom = <Link href={`/${eFromID}`}>{eFromName}</Link>
    } catch {
        console.log("base evolution")
    }
    var eTo
    try {
        eTo = info.evolution.M.evolvesTo.L.map((info) => {
            const eToName = info.M.name.S.charAt(0).toUpperCase() + info.M.name.S.slice(1)
            const eToID = info.M.id.N
            return (
                <div key={`eTo${eToID}`}>
                    <Link href={`/${eToID}`}>{eToName}</Link>
                    <br></br>
                </div>
            )
        })
    } catch {
        console.log("final evolution")
    }
    const [imageSrc, setSrc] = React.useState(getPicture(info))
    const [abilities, setAbilities] = React.useState(info.varieties.L[0].M.abilities.L.map((ability) => ability.S).join(", "))
    const [types, setTypes] = React.useState(info.varieties.L[0].M.types.L.map((info) => {
        return (
            <Badge key={info.S}>{info.S}</Badge>
        )
    }))
    console.log(imageSrc)
    const handleChange = (val) => {
        setSrc(getPicture(info, val))
        setTypes(info.varieties.L[val].M.types.L.map((info) => {
            return (
                <Badge key={info.S}>{info.S}</Badge>
            )
        }))
        setAbilities(info.varieties.L[val].M.abilities.L.map((ability) => ability.S).join(", "))
    }
    return (
        <div className="bg-slate-950 h-screen w-screen flex flex-row">
            <div id="test" className="w-[60%] flex items-center justify-center">
                <div>
                    <Image id="image" key="image" className="bg-slate-950" src={imageSrc} width={500} height={500} alt="Image Not Found"></Image>
                </div>
            </div>
            <div className="flex-col w-[40%]">
                <div className="h-[10%]">
                    <h1 className="text-4xl font-bold text-center text-white">{number}    {name}</h1>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <Select id="variationSelection" onValueChange={handleChange} className="bg-slate-200">
                            <SelectTrigger className="w-[180px] bg-white">
                                <SelectValue placeholder="Variation" />
                            </SelectTrigger>
                            <SelectContent>
                                {variations}
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <div className="flex justify-center items-center h-[80%]">
                    <div className="rounded-md m-8 bg-slate-700">
                        <div className="flex flex-row justify-left m-4 space-x-2">
                            <p className="text-l font-bold text-white">Genus:</p>
                            <p className="text-white">{genus}</p>
                        </div>
                        <div className="flex flex-row justify-left m-4 space-x-2">
                        </div>
                        <div className="flex flex-wrap justify-left m-4 space-x-2">
                            <p className="text-l font-bold text-white">Types:</p>
                            {types}
                        </div>
                        <div className="flex flex-wrap justify-left m-4 space-x-2">
                            <p className="text-l font-bold text-white">Abilities:</p>
                            <p className="text-white">{abilities}</p>
                        </div>
                        <div className="flex flex-wrap justify-left m-4 space-x-2">
                            <p className="text-l font-bold text-white">Evolves From:</p>
                            <p className="text-white">{eFrom}</p>
                        </div>
                        <div className="flex flex-wrap justify-left m-4 space-x-2">
                            <p className="text-l font-bold text-white">Evolves To:</p>
                            <p className="text-white">{eTo}</p>
                        </div>
                    </div>


                </div>
                <div className="text-white flex justify-center items-center">
                    {links}
                </div>
            </div>
        </div>
    )
}

export default Info;