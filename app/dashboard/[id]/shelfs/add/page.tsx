import ShelfForm from "@/components/forms/shelfAdd";

export default async function Shelf({
    params,
    }: {
        params: Promise<{ id: string }>
    }) {
    // Get user ID from slug
    const { id } = await params
    
    // console.log("add shelf user ", id)

    return (
        <>
        <h1 className="text-sm font-medium mb-2">Add Shelf</h1>
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <div className="p-4 rounded-md border border-black/8 dark:border-white/[.145] bg-transparent shadow-md">

                    <ShelfForm data={id} />

                </div>
            </div>
        </div>
        </>
    )
}