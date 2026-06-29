import { updateAsset } from "@/app/dashboard/[id]/assets/actions";
import SubmitButton from "./submit-button";
import prisma from "@/app/generated/prisma"
import Form from 'next/form'
import { Button, Stack, Textarea, Text } from "@chakra-ui/react"

export default async function AssetForm({data} : {data:any}) {
    // console.log('form data ', data);

    // Get asset data from db
    const assets = await prisma.asset.findFirst({
        where: { id: data },
    });
    // console.log("assets", assets)

    if (!assets) {
        return <div>Asset not found</div>;
    }

    return (
        <>
            <form action={updateAsset} className="space-y-2">
                <input
                    name="id"
                    defaultValue={assets.id}
                    hidden
                    readOnly
                />
                <input
                    name="isbn"
                    placeholder="ISBN No"
                    defaultValue={assets.isbn}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="title"
                    placeholder="Title"
                    defaultValue={assets.title}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="author"
                    placeholder="Author"
                    defaultValue={assets.author}
                    className="border p-2 w-full"
                />
                <Textarea
                    name="description"
                    placeholder="Description"
                    defaultValue={assets.description ?? ""}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="type"
                    placeholder="Type"
                    defaultValue={assets.type}
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="shelf"
                    placeholder="Shelf"
                    defaultValue={assets.shelf ?? ""}
                    className="border p-2 w-full"
                    required
                />
                <SubmitButton />
            </form>
        </>
    )
}