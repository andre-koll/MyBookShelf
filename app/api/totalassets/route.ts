import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    // console.log(data.url);
    const table = "asset"
    // get ammount of assets
    try {
        const assets = await prisma.asset.findMany(
            {
                select: {
                    id: true
                }
            }
        );
        // console.log( Object.keys( assets ).length ) ;
        return NextResponse.json( Object.keys( assets ).length )
    } catch (error) {
        console.log("Error fetching assets", error);
        return NextResponse.error();
    }
}