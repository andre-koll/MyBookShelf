import { updateAssetByGoogle } from "@/app/dashboard/[id]/assets/actions";
import SubmitButton from "./submit-button";
import prisma from "@/app/generated/prisma"
import getUserId from "@/app/dashboard/actions";

export default async function AssetGoogleBookForm() {
    const userId = await getUserId(); // Call the getUserId function to retrieve the user ID
    // console.log('form data ', data);

    // Get asset data from db
    const shelfs = await prisma.shelf.findMany({
        where: { userId: userId },
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
                    defaultValue={userId}
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