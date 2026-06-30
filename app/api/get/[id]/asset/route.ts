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
    // get ammount of assets
    try {
        const id = await params.id;
        console.log(id);
        const assets = await prisma.asset.findMany(
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
                    shelf: {
                        select: {
                        name: true,
                    },
                    },
                }
            }
        );
        // console.log( Object.keys( assets ).length ) ;
        return NextResponse.json( assets )
    } catch (error) {
        console.log("Error fetching assets", error);
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

    const getPost = await prisma.asset.findMany({
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
    console.error("Error retreiving assets:", error);
    return NextResponse.json(
      { error: "An error occurred while retreiving the assets" },
      { status: 500 }
    );
  }
}
*/
