import { addAsset } from "@/app/dashboard/[id]/assets/actions";
import SubmitButton from "./submit-button";

export default async function AssetForm({data} : {data:any}) {
    // console.log({data});

    return (
        <>
            <form action={addAsset} className="space-y-2">
                <input
                    name="userId"
                    defaultValue={data}
                    hidden
                    readOnly
                />
                <input
                    name="isbn"
                    placeholder="ISBN No"
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="title"
                    placeholder="Title"
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="author"
                    placeholder="Author"
                    className="border p-2 w-full"
                />
                <input
                    name="description"
                    placeholder="Description"
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="type"
                    placeholder="Type"
                    className="border p-2 w-full"
                    required
                />
                <input
                    name="shelf"
                    placeholder="Shelf"
                    className="border p-2 w-full"
                    required
                />
                <SubmitButton />
            </form>
        </>
    )
}