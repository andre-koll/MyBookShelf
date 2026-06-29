import AssetGoogleBookForm from "@/components/forms/assetAddGoogleBooks";

export default async function Asset({
  params,
  }: {
    params: Promise<{ id: string }>
  }) {
  // Get user ID from slug
  const { id } = await params
 
  // console.log("add asset user ", id)

  return (
    <>
      <h1 className="text-sm font-medium mb-2">Search via google with IBAN</h1>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="p-4 rounded-md border border-black/8 dark:border-white/[.145] bg-transparent shadow-md">

                <AssetGoogleBookForm data={id} />

            </div>
          </div>
        </div>
    </>
  )
}