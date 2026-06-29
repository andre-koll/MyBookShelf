import { addShelf } from "@/app/dashboard/[id]/shelfs/actions";
import SubmitButton from "./submit-button";

export default async function ShelfForm({data} : {data:any}) {
    // console.log({data});

    return (
        <>
            <form action={addShelf} className="space-y-2">
                <input
                    name="userId"
                    defaultValue={data}
                    hidden
                    readOnly
                />
                <input
                    name="name"
                    placeholder="Name"
                    className="border p-2 w-full"
                    required
                />
                <SubmitButton />
            </form>
        {/* </div> */}

        </>
    )
}