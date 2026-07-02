import AssetForm from "@/components/forms/assetEdit";

export default async function editAsset({
    params,
    }: {
        params: Promise<{ id: string }>
    }) {
    // Get asset ID from slug
    const { id } = await params
    
    // console.log("edit asset ", id)

    return (
        <>
        <h1 className="text-sm font-medium mb-2">Edit Asset</h1>
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <div className="p-4 rounded-md border border-black/8 dark:border-white/[.145] bg-transparent shadow-md">

                    <AssetForm data={id} />

                </div>
            </div>
        </div>
        </>
    )
}