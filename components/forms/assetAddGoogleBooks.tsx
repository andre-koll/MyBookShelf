import { updateAssetByGoogle } from "@/app/dashboard/[id]/assets/actions";
import SubmitButton from "./submit-button";
import prisma from "@/app/generated/prisma"
import { Button } from "@/components/ui/button";

export default async function AssetGoogleBookForm({data} : {data:any}) {
    // console.log('form data ', data);

    // Get asset data from db
    const shelfs = await prisma.shelf.findMany({
        where: { userId: data },
    });
    // console.log("shelfs", shelfs)

    if (shelfs.length === 0) {
        return <div>No shelfs found, please add a shelf</div>;
    }

    return (
        <>
            <form action={updateAssetByGoogle} className="space-y-2">
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
                <SubmitButton />
            </form>
        </>
    )
}