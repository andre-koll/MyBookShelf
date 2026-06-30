import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    // get ammount of users
    try {
        const users = await prisma.user.findMany(
            {
                select: {
                    id: true
                }
            }
        );
        // console.log( Object.keys( users ).length ) ;
        return NextResponse.json( Object.keys( users ).length )
    } catch (error) {
        console.log("Error fetching users", error);
        return NextResponse.error();
    }
}