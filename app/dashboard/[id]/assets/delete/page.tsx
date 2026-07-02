import AssetForm from "@/components/forms/assetEdit";

export default async function deleteAsset({
    params,
    }: {
        params: Promise<{ id: string }>
    }) {
    // Get user ID from slug
    const { id } = await params
    
    console.log("delete asset user ", id)

    return (
        <>
        <h1 className="text-sm font-medium mb-2">Add Asset</h1>
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <div className="p-4 rounded-md border border-black/8 dark:border-white/[.145] bg-transparent shadow-md">
                    delete Asset
                    {/* <AssetForm data={id} /> */}

                </div>
            </div>
        </div>
        </>
  )
}