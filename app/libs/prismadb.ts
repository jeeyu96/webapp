import { PrismaClient } from "@prisma/client";


// global definition / type description for prisma
declare global {
    var prisma: PrismaClient | undefined
}

// checks if client exists or creates new client
const client = globalThis.prisma || new PrismaClient()
// check if we are in dev -> set globalThis.prisma to newly created client
if (process.env.NODE_ENV != 'production') globalThis.prisma = client


export default client;