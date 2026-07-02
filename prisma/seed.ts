// seed new data with: npx prisma db seed

// npx prisma db seed

// import { PrismaClient, Prisma} from "@prisma/client";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

// const adapter = new PrismaPg();

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });
// const prisma = new PrismaClient({ adapter });

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter: pool })


async function main() {
    const seedUser = [
        {
            id: "77e5215f-e574-446a-853c-bb731e4743303",
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
    ];

    const seedAsset = [
        {
            isbn: "978-0-7432-7356-5",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            type: "Book",
            shelfId: "810fd100-d411-4d65-baeb-9ed632bbb82e",
            postedById: "FoFFqcBwEaylnbmHBjdDvNUVqt4iZYB3",
        },
        {
            isbn: "978-0-452-28423-4",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            type: "Book",
            shelfId: "810fd100-d411-4d65-baeb-9ed632bbb82e",
            postedById: "FoFFqcBwEaylnbmHBjdDvNUVqt4iZYB3",
        },
        {
            isbn: "978-0-14-028329-7",
            title: "1984",
            author: "George Orwell",
            type: "Book",
            shelfId: "810fd100-d411-4d65-baeb-9ed632bbb82e",
            postedById: "FoFFqcBwEaylnbmHBjdDvNUVqt4iZYB3",
        },
    ];

    /* fake assets */
    const fakeIsbn = {
        "isbns": [
            "9791030602043",
            "9788498379334",
            "9781528701419",
            "9781021534668",
            "9781148448855",
            "9783631866979",
            "9798862103083",
            "9783031608032",
            "9781450070263",
            "9781021497246",
            "9798837716782",
            "9781378048283",
            "9780135336076",
            "9781019685907",
            "9788830462847",
            "9781022268739",
            "9791042403195",
            "9780873388344",
            "9782845975170",
            "9783689510046",
            "9781406516647",
            "9781580001090",
            "9783798351783",
            "9783798394728",
            "9781578560646",
            "9781587671333",
            "9781582187792",
            "9781019644126",
            "9783792977644",
            "9793234099339",
            "9781398490550",
            "9783796696275",
            "9780802844897",
            "9788854400931",
            "9780521874649",
            "9781425485177",
            "9793524216491",
            "9788483195277",
            "9793524187616",
            "9780548295861",
            "9783798621893",
            "9780741429445",
            "9783798431447",
            "9781911481096",
        ]
    };

    const seedShelf = [
        {
            id: "cmqqsx3bh0000dfgsu1kji6m1",
            name: "Shelf 1",
            userId: "FoFFqcBwEaylnbmHBjdDvNUVqt4iZYB3",
            appliedAt: "2026-06-22T05:00:00.090Z",
        },
    ];

    for (const user of seedUser) {
        await prisma.user.upsert({
            where: { id: user.id },
                update: {
                name: user.name,
                email: user.email,
                emailVerified: user.emailVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
            create: user,
        });
    }
    console.log(`Seeded ${seedUser.length} User entries.`);
    
    // for (const asset of seedAsset) {
    //     await prisma.asset.upsert({
    //         where: { isbn: asset.isbn },
    //         update: {
    //             title: asset.title,
    //             author: asset.author,
    //             type: asset.type,
    //             shelfId: asset.shelfId,
    //             postedById: asset.postedById,
    //         },
    //         create: asset,
    //     });
    // }
    // console.log(`Seeded ${seedAsset.length} entries.`);

    for (const shelf of seedShelf) {
        await prisma.shelf.upsert({
            where: { id: shelf.id },
            update: {
                name: shelf.name,
                userId: shelf.userId,
                appliedAt: shelf.appliedAt,
            },
            create: shelf,
        });
    }
    console.log(`Seeded ${seedShelf.length} Shelf entries.`);

    for (const isbn of fakeIsbn.isbns) {
        // await prisma.shelf.upsert({
        //     where: { id: shelf.id },
        //     update: {
        //         name: shelf.name,
        //         userId: shelf.userId,
        //         appliedAt: shelf.appliedAt,
        //     },
        //     create: shelf,
        // });

        // let isbn = '978-3-7645-0335-2'
        let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
        let apiKey = process.env.GOOGLE_API_BOOK_KEY
        let url = apiUrl + isbn + '&key=' + apiKey
        let google = await fetch(url)
        // let googlebook = await google.json()
        // console.log(isbn);
        // console.log(isbn + ' = title ',  googlebook.items[0].volumeInfo.title);

        let googlebook;
        try {
            googlebook = await google.json();
        } catch (error) {
            console.error(error)
        }
        if (googlebook && googlebook.totalItems > 0) {
            console.log('isbn = ' + isbn)
            // console.log('url = ' + url)
            // console.log(googlebook)
            // console.log('title ',  googlebook.items[0].volumeInfo.title);
            // console.log('author ',  googlebook.items[0].volumeInfo.authors[0]);
            // if (googlebook.items?.[0]?.searchInfo?.textSnippet) {
            //     console.log('description ', googlebook.items[0].searchInfo.textSnippet);
            // }
            // console.log('type ',  googlebook.items[0].volumeInfo.subtitle);
            // if (googlebook.items?.[0]?.volumeInfo?.imageLinks?.thumbnail) {
            //     console.log('image ',  googlebook.items[0].volumeInfo.imageLinks.thumbnail);
            // }
            // var googleAsset = {
            //     postedById: "LauLwQTtZ4z7baLMvFAHYMvFdow1FCwH",
            //     isbn,
            //     title: googlebook.items[0].volumeInfo.title,
            //     author: googlebook.items[0].volumeInfo.authors[0],
            //     description: googlebook.items?.[0]?.searchInfo?.textSnippet,
            //     type: googlebook.items[0].volumeInfo.subtitle,
            //     image: googlebook.items?.[0]?.volumeInfo?.imageLinks?.thumbnail,
            // };
            // console.log(googleAsset);

            let postedById = "FoFFqcBwEaylnbmHBjdDvNUVqt4iZYB3"
            let shelfId = "ee1a765f-bc7f-4398-aa9d-677acb917eb7"
            let title = googlebook.items[0].volumeInfo.title
            let author = googlebook.items[0].volumeInfo.authors[0]
            let description = googlebook.items?.[0]?.searchInfo?.textSnippet
            // let type = googlebook.items[0].volumeInfo.subtitle
            let type = googlebook.items[0].volumeInfo.printType ? googlebook.items[0].volumeInfo.printType : ''
            let image = googlebook.items?.[0]?.volumeInfo?.imageLinks?.thumbnail ? googlebook.items?.[0]?.volumeInfo?.imageLinks?.thumbnail : 'no'

            console.log(type);
            console.log(image);
            console.log("url " + url);

            // insert into db
            await prisma.asset.create({
                data: {
                    postedById,
                    isbn,
                    title,
                    author,
                    description,
                    type,
                    shelfId,
                    image,
                    postedAt: new Date()
                }
            });

        }

    }
    // console.log(`Seeded ${fakeIsbn} entries.`);

}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

