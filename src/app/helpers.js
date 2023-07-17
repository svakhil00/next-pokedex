import { DynamoDBClient, GetItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { Card } from "../components/ui/card";
import { CardContent } from "../components/ui/card";
import Image from "next/image";
import { Label } from "../components/ui/label";

export async function getAllPokemon() {
    const client = new DynamoDBClient({ region: 'us-east-2' });
    const input = { // QueryInput
        TableName: "pokemon", // required
        Limit: Number("int"),
        ConsistentRead: true || false,
    };

    const command = new QueryCommand(input);
    try {
        const results = await client.send(command);
        return results;
    } catch (err) {
        console.log(err);
    }
}

export async function getPokemon(id) {
    const params = {
        TableName: 'pokemon',
        Key: {
            "id": {
                N: id.toString()
            }
        }
    }
    const client = new DynamoDBClient({ region: 'us-east-2' });
    const command = new GetItemCommand(params);

    try {
        const results = await client.send(command);
        return results;
    } catch (err) {
        console.log(err);
    }
}

export function makeCard(info) {
    const type = info.Item.varieties.L[0].M.types.L[0].S
    const name = info.Item.name.S.charAt(0).toUpperCase() + info.Item.name.S.slice(1)
    const number = "#" + info.Item.id.N.padStart(4, '0')
    const color = getColor(type)
    //set slate to $(color)
    return (
        <Card className={`w-[250px] bg-slate-200 border-${color}-950`}>
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

export function getPicture(info) {
    return info.Item.varieties.L[0].M.img.S
}

export function getColor(type) {
    const typeConversion = {
        normal: "neutral",
        fire: "orange",
        water: "blue",
        grass: "green",
        electric: "yellow",
        ice: "sky",
        fighting: "red",
        poison: "violet",
        ground: "amber",
        flying: "purple",
        psychic: "pink",
        bug: "lime",
        rock: "stone",
        ghosts: "slate",
        dark: "zinc",
        dragon: "indigo",
        steel: "gray",
        fairy: "rose",
    }
    return typeConversion[type]
}
