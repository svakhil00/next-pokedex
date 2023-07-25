import { Checkbox } from "./checkbox";

const Filtering = () => {

    return (
        <div className="grid grid-cols-2 items-center content-center space-x-2">
            <h1 className="text-m text-white"> Filter by</h1>
            <h1 className="text-m text-white">Type</h1>
            <p></p>
            <p></p>
            <Checkbox className="bg-neutral-200" id="normal" />
            <label
                htmlFor="normal"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Normal
            </label>
            <Checkbox className="bg-orange-200" id="fire" />
            <label
                htmlFor="fire"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Fire
            </label>
            <Checkbox className="bg-blue-200" id="water" />
            <label
                htmlFor="water"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Water
            </label>
            <Checkbox className="bg-green-200" id="grass" />
            <label
                htmlFor="grass"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Grass
            </label>
            <Checkbox className="bg-yellow-200" id="electric" />
            <label
                htmlFor="electric"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Electric
            </label>
            <Checkbox className="bg-sky-200" id="ice" />
            <label
                htmlFor="ice"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ice
            </label>
            <Checkbox className="bg-red-200" id="fighting" />
            <label
                htmlFor="fighting"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Fighting
            </label>
            <Checkbox className="bg-violet-200" id="poison" />
            <label
                htmlFor="poison"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Poison
            </label>
            <Checkbox className="bg-amber-200" id="ground" />
            <label
                htmlFor="ground"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ground
            </label>
            <Checkbox className="bg-purple-200" id="flying" />
            <label
                htmlFor="flying"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Flying
            </label>
            <Checkbox className="bg-pink-200" id="psychic" />
            <label
                htmlFor="psychic"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Psychic
            </label>
            <Checkbox className="bg-lime-200" id="bug" />
            <label
                htmlFor="bug"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Bug
            </label>
            <Checkbox className="bg-stone-200" id="rock" />
            <label
                htmlFor="rock"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Rock
            </label>
            <Checkbox className="bg-slate-200" id="ghost" />
            <label
                htmlFor="ghost"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ghost
            </label>
            <Checkbox className="bg-zinc-200" id="dark" />
            <label
                htmlFor="dark"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Dark
            </label>
            <Checkbox className="bg-indigo-200" id="dragon" />
            <label
                htmlFor="dragon"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Dragon
            </label>
            <Checkbox className="bg-gray-200" id="steel" />
            <label
                htmlFor="steel"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Steel
            </label>
            <Checkbox className="bg-rose-200" id="fairy" />
            <label
                htmlFor="fairy"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Fairy
            </label>
        </div>
    )
}

export default Filtering;