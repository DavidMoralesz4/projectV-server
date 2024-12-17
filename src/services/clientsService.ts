import { Client } from "../models/Clients"


export const createClientService = async(firstName: string, lastName: string, phone: string, document: string, address: string) => {
    const client = await Client.create({firstName, lastName, phone, document, address})

    return client
}