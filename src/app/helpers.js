import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import card from "../components/Card";

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
