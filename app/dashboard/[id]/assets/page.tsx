import getUserId from "@/app/dashboard/actions";
import Link from "next/link";
import { columns, Assets } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { deleteAsset } from "./actions"

async function getData(userId: string): Promise<Assets[]> {

    // Fetch data from API
    // console.log("User in Assets:", userId);
    const body = JSON.stringify({ id: userId })
    const putMethod = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body
        }

    const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_URL + `/get/${userId}/asset`,
        putMethod
    )
    const data = await res.json()

    // console.log(data);
    return data as Assets[]
}

export default async function AssetList() {
    const userId = await getUserId(); // Call the getUserId function to retrieve the user ID

    const data = await getData(userId)

    return (
        <>
            <h1>Your Assets</h1>
            <div className="flex items-center justify-end">
                <Button asChild className="flex items-center gap-x-2 mx-3">
                    <Link key="/dashboard/assets" href={`/dashboard/${userId}/assets/add`}>
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Add Asset</span>
                    </Link>
                </Button>
                {/* <Button asChild className="flex items-center gap-x-2">
                    <Link key="/dashboard/assets" href={`/dashboard/${userId}/assets/google-books`}>
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Add Asset via Google Books</span>
                    </Link>
                </Button> */}
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </>
  )
}