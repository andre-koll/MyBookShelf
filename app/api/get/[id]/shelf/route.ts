import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// async function Page({ params }) {
//   // asynchronous access of `params.id`.
//   const { id } = await params
//   return <p>ID: {id}</p>
// }

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // get ammount of shelfs
    try {
        const id = await params.id;
        console.log(id);
        const shelfs = await prisma.shelf.findMany(
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
            }
        );
        // console.log( Object.keys( shelfs ).length ) ;
        return NextResponse.json( shelfs )
    } catch (error) {
        console.log("Error fetching shelfs", error);
        return NextResponse.error();
    }
}
/*
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import prisma from "@/lib/prisma";

// export async function PUT(req: Request) {
export async function POST(req: NextApiRequest) {
  const id = await req;
  try {
    // const { id } = await req.json();

    console.log ("id = " + id);

    const getPost = await prisma.shelf.findMany({
        where: { 
            userId: id
        },
        orderBy: {
            name: "asc",
        },
        select: {
            id: true,
            name: true,
            userId: true,
            status: true,
        }
    });

    return NextResponse.json(getPost);
  } catch (error) {
    console.error("Error retreiving shelfs:", error);
    return NextResponse.json(
      { error: "An error occurred while retreiving the shelfs" },
      { status: 500 }
    );
  }
}
*/
