import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
// import { adapter } from 'next/dist/server/web/adapter';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})
const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter: adapter
  })
}
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

/*
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// 1. Instantiate the raw connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 2. Wrap the pool with Prisma's Driver Adapter
const adapter = new PrismaPg(pool);

// 3. Initialize PrismaClient with the adapter
const prisma = new PrismaClient({ adapter });

const globalForPrisma = global as unknown as { prisma: typeof prisma }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
*/

/*
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

// import { PrismaClient } from '@prisma/client';
// import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// 1. Create a native database pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // Adjust pool size based on your app
});

// 2. Create the Prisma adapter
// const adapter = new PrismaPg(pool);

// 3. Initialize Prisma Client
// const prisma = new PrismaClient({ adapter });
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });


// const prisma = new PrismaClient({ adapter: pool })
const prisma = new PrismaClient({ adapter });
*/

