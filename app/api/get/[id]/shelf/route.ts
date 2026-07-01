import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
    try {
        const { id } = await req.json();
        const getData = await prisma.shelf.findMany(
            {
                where: { userId: id },
                orderBy: {
                    name: "asc",
                },
                select: {
                    id: true,
                    name: true,
                    userId: true,
                    status: true,
                    user: {
                        select: {
                        name: true,
                    },
                    },
                }
            });

        return NextResponse.json(getData);
    } catch (error) {
        console.error("Error retreiving data:", error);
        return NextResponse.json(
        { error: "An error occurred while retreiving the data" },
        { status: 500 }
        );
    }
}