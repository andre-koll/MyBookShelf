'use client'

import { CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// import prisma from "@/app/generated/prisma"
import prisma from "@/lib/prisma"
// import prisma from "@/app/generated/prisma"
// import prisma, { Shelflist } from "@/lib/prisma"
// import prisma from "../../lib/prisma"


function Shelflist({ data }: { data: { name?: string } }) {
    return (
        <h1>Users list {data.name}</h1>
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

export default Shelflist
