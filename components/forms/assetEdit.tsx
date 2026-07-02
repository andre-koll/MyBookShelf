import getUserId from "@/app/dashboard/actions";
import { updateAsset } from "@/app/dashboard/[id]/assets/actions";
import SubmitButton from "./submit-button";
import prisma from "@/app/generated/prisma"
import ShelfSelect from "./shelfSelect";
import Form from 'next/form'

export default async function AssetForm({data} : {data:any}) {
    const userId = await getUserId(); // Call the getUserId function to retrieve the user ID
    // console.log('form data ', data);

    // Get asset data from db
    const assets = await prisma.asset.findFirst({
        where: { id: data },
                select: {
                    id: true,
                    isbn: true,
                    title: true,
                    author: true,
                    description: true,
                    type: true,
                    shelf: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                }
    });
    // console.log("assets", assets)

    // Get shelfs data from db
    const shelfs = await prisma.shelf.findMany({
        where: { userId: userId },
    });
    console.log("shelfs", shelfs)

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
                <textarea
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
                <div className="mt-2 grid grid-cols-1 w-80">
                    <select name="shelfId" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required>
                    <option key={assets.shelf?.id} value={assets.shelf?.id} defaultChecked>{assets.shelf?.name}</option>
                        <ShelfSelect />
                    </select>
                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                </div>
                <SubmitButton />
            </form>
        </>
    )
}