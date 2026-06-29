'use client'

import { CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import prisma from "@/app/generated/prisma"
// import prisma from "@/app/generated/prisma"
// import prisma, { Shelflist } from "@/lib/prisma"
// import prisma from "../../lib/prisma"


function Shelflist({ data }) {
  return (
    <h1>Users list {data.name}</h1>
    //users.map and so on...
  )
}

export async function getShelfs() {
    const postedByID = 'rqnncbSoKaFCJLxFa2mi9imrTUyciziI';

    const shelfs = await prisma.shelf.findMany({
    where: { userId: postedByID },
    orderBy: {
        appliedAt: "desc",
    },
    take: 10,
    });

    return {
        props: {
            shelfs: shelfs
        }
    }
}


//   const users = await findUsers()
//   return {
//     props: {
//       users: users
//     }
//   }


// export async function getServerSideProps() {
//   const users = await findUsers()


//     const postedByID = 'rqnncbSoKaFCJLxFa2mi9imrTUyciziI';

//     // const shelfs = await prisma.shelf.findMany()
//     const shelfs = await prisma.shelf.findMany({
//     where: { userId: postedByID },
//     orderBy: {
//         appliedAt: "desc",
//     },
//     take: 10,
//     });

// //   return {
// //     props: {
// //       users: users
// //     }
// //   }
// }


// export default function Assets({ id }: AssetsProps) {
export function ShelflistXXX(data) {
    console.log('Shelflist', data.data.id);

    return (
        // <div>{data.data.id}</div>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Owner</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Books</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p className="font-medium">Aline Test</p>
                            <p className="hidden md:flex text-sm text-muted-foreground">test@test.com</p>
                        </TableCell>
                        <TableCell>Billy 1</TableCell>
                        <TableCell>22-06-2026</TableCell>
                        <TableCell className="text-right">33</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>

    );
}

export default Shelflist
