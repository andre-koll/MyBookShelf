// seed new data with: npx prisma db seed

// npx prisma db seed

// import { PrismaClient, Prisma} from "@prisma/client";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

// const adapter = new PrismaPg();

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });
// const prisma = new PrismaClient({ adapter });

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter: pool })

async function seed () {
    console.log(`Start seeding ...`)

    // clear existing user data
    await prisma.shelf.deleteMany()
    await prisma.asset.deleteMany()
    await prisma.user.deleteMany()

    await prisma.user.createMany({
        data: [
            {
                id: "2f1c5e8d-0510-4669-b9af-01f7eb688bad",
                name: "John Doe",
                email: "john@example.com",
                emailVerified: false,
                createdAt: "2026-06-22T03:49:00.090Z",
                updatedAt: "2026-06-22T05:00:00.090Z"
            },
            {
                id: "77e5215f-e574-446a-853c-bb731e474401",
                name: "Jane Smith",
                email: "jane@example.com",
                emailVerified: false,
                createdAt: "2026-06-22T05:00:00.090Z",
                updatedAt: "2026-06-22T05:00:00.090Z"
            },
            {
                id: "001c1e30-122e-4085-80d1-f51605e606ac",
                name: "Bob Johnson",
                email: "bob@example.com",
                emailVerified: false,
                createdAt: "2026-06-22T05:00:00.090Z",
                updatedAt: "2026-06-22T05:00:00.090Z"
            },
            {
                id: "3b730678-4961-4345-989b-4164653d7447",
                name: "Alice Brown",
                email: "alice@example.com",
                emailVerified: false,
                createdAt: "2026-06-22T05:00:00.090Z",
                updatedAt: "2026-06-22T05:00:00.090Z"
            },
            {
                id: "184fc902-7478-4f7a-b51f-0958c8af12c3",
                name: "Charlie Davis",
                email: "charlie@example.com",
                emailVerified: false,
                createdAt: "2026-06-22T05:00:00.090Z",
                updatedAt: "2026-06-22T05:00:00.090Z"
            }
        ]
    });



    await prisma.asset.createMany({
        data: [
            {
                isbn: "978-0-7432-7356-5",
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                type: "Book",
                shelfId: "1",
                postedById: "2f1c5e8d-0510-4669-b9af-01f7eb688bad",
            },
            {
                isbn: "978-0-452-28423-4",
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                type: "Book",
                shelfId: "1",
                postedById: "2f1c5e8d-0510-4669-b9af-01f7eb688bad",
            },
            {
                isbn: "978-0-14-028329-7",
                title: "1984",
                author: "George Orwell",
                type: "Book",
                shelfId: "1",
                postedById: "2f1c5e8d-0510-4669-b9af-01f7eb688bad",
            },
        ]
    });



    await prisma.shelf.createMany({
        data: [
            {
                id: "cmqqsx3bh0000dfgsu1kji6m1",
                name: "Shelf 1",
                userId: "2f1c5e8d-0510-4669-b9af-01f7eb688bad",
                appliedAt: "2026-06-22T05:00:00.090Z",
            },
        ]
    });

/*
  id String @id @default(cuid())
  assetId String
  userId String
  status String @default("PENDING") // REVIEWING, ACCEPTED, REJECTED
  appliedAt DateTime @default(now())


  id String @id @default(uuid())
  isbn String @unique
  title String
  author String
  type String

*/
    console.log(`Seeding finished.`);
}


// seed ().then(() => prisma.$disconnect());

seed()
    .then(() => {
        console.log("Seeding completed successfully.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Error seeding data:", error);
        process.exit(1);
    }); 


