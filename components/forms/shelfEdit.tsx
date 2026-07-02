import { updateShelf } from "@/app/dashboard/[id]/shelfs/actions";
import SubmitButton from "./submit-button";
// import prisma from "@/app/generated/prisma"
import prisma from "@/lib/prisma"

export default async function ShelfForm({data} : {data:any}) {
    // console.log({data});

    // Get shelf data from db
    const shelfs = await prisma.shelf.findFirst({
        where: { id: data },
    });
    // console.log("shelfs", shelfs)

    if (!shelfs) {
        return <div>Shelf not found</div>;
    }


    return (
        <>
            <form action={updateShelf} className="space-y-2">
                <input
                    name="id"
                    defaultValue={shelfs.id}
                    hidden
                    readOnly
                />
                <input
                    name="userId"
                    defaultValue={shelfs.userId}
                    hidden
                    readOnly
                />
                <input
                    name="name"
                    placeholder="Name"
                    defaultValue={shelfs.name}
                    className="border p-2 w-full"
                    required
                />
                <SubmitButton />
            </form>
        {/* </div> */}

        </>
    )
}