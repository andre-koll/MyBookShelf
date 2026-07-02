import getUserId from "@/app/dashboard/actions";
import prisma from "@/app/generated/prisma"

export default async function shelfselect() {
    const userId = await getUserId(); // Call the getUserId function to retrieve the user ID

    // Get shelf data from db
    const shelfs = await prisma.shelf.findMany({
        where: { userId: userId },
        orderBy: {
            name: "asc",
        },
    });
    // console.log("shelfs", shelfs)

    if (shelfs.length === 0) {
        return <div>No shelfs found, please add a shelf</div>;
    }

    return (
        <>
        {shelfs.map((shelf) => (
            <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
        ))}
        </>
    )
}