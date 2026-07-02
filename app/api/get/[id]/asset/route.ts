import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
    try {
        const { id } = await req.json();
        const getData = await prisma.asset.findMany(
            {
                where: { postedById: id },
                orderBy: {
                    title: "asc",
                },
                select: {
                    id: true,
                    isbn: true,
                    title: true,
                    author: true,
                    type: true,
                    image: true,
                    shelf: {
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