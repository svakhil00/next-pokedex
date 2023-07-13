import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
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