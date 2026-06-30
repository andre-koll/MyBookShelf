import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    // get ammount of shelfs
    try {
        const shelfs = await prisma.shelf.findMany(
            {
                select: {
                    id: true,
                }
            }
        );
        // console.log( Object.keys( shelfs ).length ) ;
        return NextResponse.json( Object.keys( shelfs ).length )
    } catch (error) {
        console.log("Error fetching shelfs", error);
        return NextResponse.error();
    }
}